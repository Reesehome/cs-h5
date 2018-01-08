<template>
    <div id="app">
        <router-view/>
        <loading v-model="isLoading"></loading>
    </div>
</template>

<script>
    import {Loading} from 'vux'
    import {mapState} from 'vuex'

    export default {
        name: 'app',
        components: {
            Loading
        },
        computed: {
            ...mapState({
                // 页面切换自动显示loading
                isLoading: state => state.vux.isLoading
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
