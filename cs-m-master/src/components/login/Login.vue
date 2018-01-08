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
                        <x-input name="mobile" placeholder="手机号码" class="input-center" keyboard="number"
                                 is-type="china-mobile">
                        </x-input>
                        <x-input name="mobile" placeholder="验证码" class="input-center" keyboard="number"
                                 is-type="china-mobile">
                        </x-input>
                    </div>
                    <div class="button">
                        <x-button class="submit-btn" type="warn">登 录</x-button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import {XHeader, XButton, Flexbox, FlexboxItem, CellFormPreview, Group, Cell, XInput} from 'vux'

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
            Group,
            Cell,
            XInput
        }
    }
</script>

<style scoped>
    @import url('../../assets/styles/login.less');
</style>
