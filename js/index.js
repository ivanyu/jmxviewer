var blessed = require('blessed');
var contrib = require('blessed-contrib');

function parseMbeansList(mbeans) {
    const result = {};

    for (let mbean of mbeans) {
        mbean = mbean['objectName'];
        var parts = mbean.split(':');

        const domain = parts[0];
        if (!(domain in result)) {
            result[domain] = {children: {}, extended: true};
        }

        const fullName = parts[1];

        parts = fullName.split(',');
        var type = null;
        var name = null;
        for (let part of parts) {
            if (part.startsWith('type=')) {
                type = part.substring('type='.length);
            } else if (part.startsWith('name=')) {
                name = part.substring('name='.length);
            }
        }

        if (!(type in result[domain].children)) {
            result[domain].children[type] = {children: {}};
        }

        if (name !== null && !(name in result[domain].children[type].children)) {
            result[domain].children[type].children[name] = {children: {}, mbean: mbean};
        } else {
            result[domain].children[type].mbean = mbean;
        }
    }

    return result;
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
