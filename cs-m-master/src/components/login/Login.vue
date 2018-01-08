<template>
    <div id="login" class="bg-color-def">
        <!--页面头部-->
        <div>
            <x-header class="header" :left-options="{showBack: false}">无限极师傅移动端</x-header>
        </div>
        <!--页面主体-->
        <div>
            <!--登录页图标-->
            <section>
                <div id="login-img">
                    <img :src="img.icon" class="login-logo"/>
                </div>
            </section>

            <!--登录表单-->
            <section>
                <div id="login-block">
                    <div class="avatar">
                        <img :src="img.avatar"/>
                    </div>
                    <div class="form">

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {XHeader, XButton, Flexbox, FlexboxItem, CellFormPreview, Group, Cell} from 'vux'

    export default {
        data() {
            return {
                img: {
                    icon: require('@img/login/login-icon.png'),
                    avatar: require('@img/login/login-avatar-default.png'),
                }
            }
        },
        components: {
            XButton,
            XHeader,
            Flexbox,
            FlexboxItem,
            CellFormPreview,
            Group,
            Cell
        }
    }
</script>

<style scoped>
    @import url('../../assets/styles/login.less');
</style>
