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
                        <div class="input-block">
                            <mt-field class="input-center" v-model="form.phone" placeholder="手机号" type="tel"></mt-field>
                        </div>
                        <div class="input-block">
                            <mt-field style="position: relative" v-model="form.verifyCode" max-length="6" class="input-center" placeholder="验证码"
                                      type="number">
                                <div class="verify-code">
                                    <a href="javascript:void(0)" @click="getVerifyCode"
                                       :class="msg.verify.wait ? 'wait' : ''">{{msg.verify.text}}</a>
                                </div>
                            </mt-field>
                        </div>
                    </div>
                    <div class="button">
                        <x-button class="submit-btn" type="normal">登 录</x-button>
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
                form: {
                    phone: null,
                    verifyCode: null,
                },
                msg: {
                    verify: {
                        text: '获取验证码',
                        wait: false
                    }
                },
                img: {
                    icon: require('@img/login/login-icon.png'),
                    avatar: require('@img/login/login-avatar-default.png'),
                }
            }
        },
        methods: {
            /**
             * 获取验证码
             */
            getVerifyCode() {
                // 判断是否处于等待
                if (this.msg.verify.wait) {
                    return;
                }
                // 校验手机号
                if (this.verifyPhone()) {
                    /**
                     * TODO 发送请求获取验证码
                     */

                    /*模拟验证码请求成功*/
                    let _this = this, waitingTime = 60;
                    _this.$toast('获取成功');
                    let timer = setInterval(() => {
                        _this.msg.verify.wait = true;
                        _this.msg.verify.text = waitingTime-- + 's后重新发送';
                        if (waitingTime === 0) {
                            clearInterval(timer);
                            _this.msg.verify.text = '获取验证码';
                            _this.msg.verify.wait = false;
                        }
                    }, 1000);
                }
            },
            /**
             * 校验手机号
             * @param phone
             */
            verifyPhone(phone = this.form.phone) {
                /**
                 * TODO 手机号码校验规则
                 */
                let pass = /^1\d{10}$/.test(phone);
                if (!pass) {
                    this.$toast('手机号码不正确');
                }
                return pass;
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
