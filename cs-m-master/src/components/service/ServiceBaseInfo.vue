<template>
    <div>
        <div class="service_baseInfo">
            <div class="service_baseInfo_time">
                <cell-form-preview :list="service_time"></cell-form-preview>
            </div>
            <div class="service_baseInfo_btn">
                <router-link to="" class="baseInfo_btn">让顾客评价服务</router-link>
            </div>
        </div>
        <div class="service_infoCard">
            <group class="service_infoCard_item">
                <cell title="上门联系信息"></cell>
                <cell-form-preview :list="infoCard.contactInfo"></cell-form-preview>
            </group>
            <group class="service_infoCard_item">
                <cell title="上门联系信息"></cell>
                <cell-form-preview :list="infoCard.contactInfo"></cell-form-preview>
            </group>
            <group class="service_infoCard_item">
                <cell title="上门联系信息"></cell>
                <cell-form-preview :list="infoCard.contactInfo"></cell-form-preview>
            </group>
        </div>
    </div>
</template>
<script>
    import { CellFormPreview, Group, Cell } from 'vux';
    export default {
        components: {
            CellFormPreview,
            Group,
            Cell
        },
        data() {
            return {
                service_time: [{
                    label: '派单时间：',
                    value: '2017-09-15 08:20'
                }, {
                    label: '接单时间：',
                    value: '2017-09-15 08:20'
                }, {
                    label: '预约时间：',
                    value: '2017-09-15 08:20'
                }, {
                    label: '完工时间：',
                    value: '2017-09-15 08:20'
                }],
                infoCard: {
                    contactInfo: [{
                        label: '蘑菇妹妹',
                        value: '12324324324'
                    }, {
                        label: '上门时间',
                        value: '2017-09-15 下午'
                    }, {
                        label: '地址',
                        value: '广东某嘎达'
                    }, {
                        label: '来电内容',
                        value: '快快快来人'
                    }]
                }
            }
        }
    }
</script>
<style>
    @import url('../../assets/styles/service/ServiceBaseInfo.less');
</style>