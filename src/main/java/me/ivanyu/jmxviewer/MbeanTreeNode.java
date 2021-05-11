/*
 * Copyright 2021 Ivan Yurchenko
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package me.ivanyu.jmxviewer;

public class MbeanTreeNode extends TreeNode<MbeanTreeNode> {
    private final String mbean;

    public MbeanTreeNode(final String label, final MbeanTreeNode parent, final String mbean) {
        super(label, parent);
        this.mbean = mbean;
    }

    public final String mbean() {
        return mbean;
    }

    @Override
    public String toString() {
        return "MbeanTreeNode[" + this.label() + "]";
    }
}
