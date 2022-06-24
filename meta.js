/**
 * File: meta.js
 * Created by busyhe on 2022/5/24 15:28.
 * Email: busyhe@qq.com
 * Description:
 */
module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
    },
    completeMessage: 'To get started:\n\n  yarn add --dev vitepress vue \n\n "scripts": {\n' +
        '    "docs:dev": "vitepress dev docs",\n' +
        '    "docs:build": "vitepress build docs",\n' +
        '    "docs:serve": "vitepress serve docs"\n' +
        '  }\n\n yarn docs:dev\n'
}
