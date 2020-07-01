module.exports = {
    title: 'VR-UI',
    description: 'A UI library, built with Vue-Cli 3.0',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    base: '/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/document/guide/Home' },
            { text: '指南', link: '/document/guide/' },
            { text: '文档', link: 'http://github.com/virtual-ui/VR-UI.git' },
            { text: 'GitLab', link: 'https://github.com/virtual-ui/VR-UI.git' }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    '/document/guide/Home',
                    '/document/guide/Introduce',
                    '/document/guide/GetStart',
                ]
            },
            {
                title:"组件",
                collapsable: false,
                children:[
                    {
                        title:'通用',
                        collapsable: false,
                        children:[
                            '/document/component/Button',
                            '/document/component/Icon'
                        ]
                    }
                ]
            }
        ]
    }
};
