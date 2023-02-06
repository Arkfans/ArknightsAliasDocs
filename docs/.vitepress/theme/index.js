import DefaultTheme from 'vitepress/theme'
import './custom.css'

import {
    NInput,
    NInputGroup,
    NButton,
    NTabs,
    NTabPane,
    NAutoComplete,
    NMessageProvider,
    NDataTable,
    create
} from 'naive-ui'

const naive = create({
    components: [
        NInput,
        NInputGroup,
        NButton,
        NTabs,
        NTabPane,
        NAutoComplete,
        NMessageProvider,
        NDataTable
    ]
});

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.use(naive);
        DefaultTheme.enhanceApp(ctx)
    }
}
