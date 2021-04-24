var blessed = require('blessed');
var contrib = require('blessed-contrib');

function parseMbeansList(mbeans) {
    mbeans = mbeans.map(x => parseMbean(x['objectName']));

    var result = {};
    for (let mbean of mbeans) {
        const [mbeanOriginal, domain, properties] = mbean;

        if (!result.hasOwnProperty(domain)) {
            result[domain] = {children: {}};
        }

        var currentNode = result[domain];

        for (let property of properties) {
            if (!currentNode.children.hasOwnProperty(property)) {
                currentNode.children[property] = {children: {}};
            }
            currentNode = currentNode.children[property];
        }
        currentNode.mbean = mbeanOriginal;
    }

    const surrogateRoot = {children: result};
    sortChildrenRecursive(surrogateRoot);
    result = surrogateRoot.children;

    markCompleteMbeanNodes(result);

    return result;
}

function parseMbean(mbean) {
    const [domain, propertyString] = mbean.split(':');

    var propertiesArr = []
    for (let property of propertyString.split(',')) {
        propertiesArr.push(property.split('='));
    }

    propertiesArr.sort(function(a, b) {
        const [aName, aValue] = a;
        const [bName, bValue] = b;

        // 'type' is always first, 'name' is always second, the rest is alphabetically
        if (aName === 'type') {
            return -1;
        }
        if (bName === 'type') {
            return 1;
        }

        if (aName === 'name') {
            return -1;
        }
        if (bName === 'name') {
            return 1;
        }

        return aName.localeCompare(bName);
    });


    var cutPoint = 0;
    for (cutPoint = 0; cutPoint < propertiesArr.length; cutPoint++) {
        if (propertiesArr[cutPoint][0] !== 'type' && propertiesArr[cutPoint][0] !== 'name') {
            break;
        }
    }
    propertiesArr = propertiesArr.map(p => p[0] + '=' + p[1]);
    const rest = propertiesArr.splice(cutPoint).join(',');
    if (rest) {
        propertiesArr.push(rest);
    }

    return [mbean, domain, propertiesArr];
}

function sortChildrenRecursive(root) {
    const sortedChildren = {};
    for (let key of Object.keys(root.children).sort()) {
        sortedChildren[key] = root.children[key];
        sortChildrenRecursive(sortedChildren[key]);
    }
    root.children = sortedChildren;
}

function markCompleteMbeanNodes(mbeansTree) {
    for (let key in mbeansTree) {
        if (mbeansTree[key].hasOwnProperty('mbean') && Object.keys(mbeansTree[key].children).length > 0) {
            mbeansTree[key].name = key + " #";
        }
        markCompleteMbeanNodes(mbeansTree[key].children);
    }
}

const mbeansTree = parseMbeansList(JSON.parse(listMbeans()));

const screen = blessed.screen({
    smartCSR: true,
    title: 'jmxviewer'
});

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});
screen.key(['tab'], function(ch, key) {
    screen.focusNext();
});

const grid = new contrib.grid({rows: 1, cols: 4, screen: screen})

const tree = grid.set(0, 0, 1, 1, contrib.tree, {label: 'MBeans', fg: 'green'})

const table = grid.set(0, 1, 1, 3, contrib.table, {
    keys: true,
    fg: 'white',
    selectedFg: 'white',
    selectedBg: 'blue',
    interactive: true,
    label: 'MBean attributes',
    wrap: true,
    border: {type: "line", fg: "cyan"},
    columnSpacing: 3, // in chars
    columnWidth: [30, 1000] // in chars
});

tree.focus();

tree.on('select', function(node) {
    if (node.mbean) {
        const attrs = JSON.parse(getAttributes(node.mbean));
        const tableData = attrs.flatMap(function(el) {
            const name = el['name'];
            const value = el['value'];
            if (value === null) {
                return [[name, 'null']];
            } else if (Array.isArray(value)) {
                return [[name, JSON.stringify(value)]];
            } else if (typeof value === 'object') {
                var result = [[name, '']];
                for (let subKey in value) {
                    result.push(['  ' + subKey, value[subKey]]);
                }
                return result;
            } else {
                return [[name, String(value)]];
            }
        });
        table.setData({
            headers: ['Name', 'Value'],
            data: tableData
        });
        screen.render();
    }
});

tree.setData({
    extended: true,
    children: mbeansTree
});

screen.render();
