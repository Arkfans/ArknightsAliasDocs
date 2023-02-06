---
提交别名
---

<script setup>
import {ref, h} from 'vue'
import {NButton} from 'naive-ui'
import request from './lib/requests'
import Message from './lib/message.vue'

const api = new request({host: 'https://alias.arkfans.top/'});
const applys = ref([]);
const reviewedApplys = ref([]);

function getApplys() {
    api.get({
        url: 'apply/get',
        success: (resp) => {
            applys.value = resp.data
        }
    });
}

function getReviewedApplys() {
    api.get({
        url: 'apply/get?reviewed=true',
        success: (resp) => {
            reviewedApplys.value = resp.data
        }
    });
}
getApplys();
getReviewedApplys();

function setValue(isAlias, text) {
    if (text.length > 100) {
        message.value.error('最长100字符');
        text = text.slice(0, 100);
    }
    if (isAlias) {
        alias.value = text
    } else {
        name.value = text
    }
}

const alias = ref('');
const name = ref('');
const autoComplete = ref([]);

function fetchName(search) {
    if (search) {
        api.get({
            url: 'name/search?output=2&mode=14&text=' + search,
            success: (resp) => {
                autoComplete.value = resp.data
            }
        })
    }
}

const message = ref(null);

function submit(_alias, _name) {
    _alias = _alias || alias.value;
    _name = _name || name.value;
    if (!_alias || !_name) {
        message.value.error('请填写别名和名称');
        return
    }
    api.post({
        url: 'apply/apply',
        data: {
            alias: _alias,
            name: _name
        },
        success: (resp) => {
            if (resp.data.data.create) {
                message.value.success('请求成功：新申请已创建')
            } else {
                message.value.success('请求成功：已赞同[' + _alias + ']')
            }
            getApplys()
        },
        error: (resp) => {
            if (resp.response.status === 422) {
                message.value.error('请求失败：参数错误');
            } else if (resp.response.status === 429) {
                message.value.loading(resp.response.data.detail)
            } else {
                message.value.error('请求失败：' + resp.response.data.detail);
            }
        }
    })
}

const BaseColumn = [
    {
        title: '别名',
        key: 'alias',
    },
    {
        title: '原名',
        key: 'name'
    },
    {
        title: '创建时间',
        key: 'create_time',
        render(row) {
            const t = new Date(row.create_time * 1000);
            return h(
                'span', t.getFullYear() + '-'
                + (t.getMonth() + 1) + '-'
                + t.getDate()
            )
        }
    }
];

const ApplyColumn = [...BaseColumn, {
    title: '赞同',
    key: 'agree',
    render(row) {
        return h(
            NButton,
            {
                onClick: () => {
                    submit(row.alias, row.name)
                }
            },
            () => row.agree
        )
    }
}];
const ReviewedApplyColumn = [...BaseColumn, {
    title: '是否通过',
    key: 'result',
    render(row) {
        return h(
            'span',
            row.result ? '✅' : '❌'
        )
    }
}];
</script>

 # 提交别名
 
 提交的别名在经过管理员审核后才会加入别名库，此过程一般会在三日内完成
 
:::tip
原名可以在 [Arkfans/ArknightsName](https://github.com/Arkfans/ArknightsName/blob/main/table/all.md) 查看
:::

 ### 提交
 
<n-message-provider :max="5">
    <Message ref="message"/>
</n-message-provider>
<n-input-group style="margin-top: 10px">
    <n-input :value="alias" @update:value="(value) => {setValue(true,value)}" placeholder="在此输入别名"
             style="width: 45%"></n-input>
    <n-auto-complete :options="autoComplete" :value="name"
                     @update:value="(value) => {fetchName(value);setValue(false,value)}" placeholder="在此输入原名"
                     style="width: 45%"></n-auto-complete>
    <n-button @click="() => {submit()}" type="primary">提交</n-button>
</n-input-group>

 ### 别名列队
 
<n-tabs type="line" default-value="need-review">
    <n-tab-pane name="need-review" tab="待审核">
        <n-data-table
                :columns="ApplyColumn"
                :data="applys"
                :bordered="false"
                class="n-table-fix"
        />
    </n-tab-pane>
    <n-tab-pane name="reviewed" tab="已审核">
        <n-data-table
                :columns="ReviewedApplyColumn"
                :data="reviewedApplys"
                :bordered="false"
                class="n-table-fix"
        />
    </n-tab-pane>
</n-tabs>

<style>
    .n-table-fix table {
        display: table;
        margin: 0;
    }

    .n-table-fix th {
        border: none;
    }
</style>