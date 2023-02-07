import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'ArkAlias',
    description: '明日方舟别名API',
    base: '/docs/',
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Arkfans/ArknightsAlias'}
        ],
        editLink: {
            pattern: 'https://github.com/Arkfans/ArknightsAliasDocs/edit/main/docs/:path',
            text: '在 Github 上编辑此页'
        },
        sidebar: {
            '/api/': [{
                text: 'API文档',
                items: [
                    {text: '接口', link: '/api/api'},
                    {text: '枚举类', link: '/api/enum'}
                ]
            }]
        },
        nav: [
            {text: '提交别名', link: '/alias'},
            {text: 'API文档', link: '/api/api'},
            {text: '在线调用', link: 'https://alias.arkfans.top/swagger#/'},
            {text: '交流群', link: 'https://jq.qq.com/?_wv=1027&k=ImatbCzG'},
        ]
    },
    lastUpdated: true,
    vite: {
        ssr: {
            format: 'cjs'
        }
    }
})