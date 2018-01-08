<template>
    <div>
        <group>
            <cell>
                <router-link to="/service/ServiceDetail">工单详情</router-link>
            </cell>
            <cell>
                <router-link to="/service/ServiceDetail">工单详情</router-link>
            </cell>
            <cell>
                <router-link to="/service/ServiceDetail">工单详情</router-link>
            </cell>
        </group>
    </div>
</template>

<script>
    import { Group, Cell } from 'vux'

    export default {
        components: {
            Group,
            Cell
        }
    }
</script>
