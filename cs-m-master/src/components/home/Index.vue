<template>
    <div id="home-index" class="bg-color-def">
        <!--页面头部-->
        <div>
            <x-header class="header" :left-options="{showBack: false}">首页</x-header>
        </div>
        <!--页面主体-->
        <div>

        </div>
    </div>
</template>

<script>
    import {XHeader, XButton, Group, Cell, XInput} from 'vux'

    export default {
        components: {
            XButton,
            XHeader,
            Group,
            Cell,
            XInput
        }
    }
</script>

<style scoped>
    @import url('../../assets/styles/home/index.less');
</style>
