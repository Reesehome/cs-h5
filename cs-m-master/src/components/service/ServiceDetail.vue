<template>
    <div id="serviceDetail">
        <!--页面头部-->
        <div>
            <x-header class="header">工单详情</x-header>
        </div>
        <!--页面主体-->
        <div>
            <!--工单简介-->
            <section class="service_head">
                <flexbox>
                    <flexbox-item :span="3">
                        <div class="flex-demo serviceH_img">
                            <img src=""/>
                            <div class="serviceH_img_status">保养</div>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo serviceH_content">
                            <p class="serviceH_content_product">家用净水器</p>
                            <p class="serviceH_content_engineer">接单师傅：何俊光</p>
                            <p class="serviceH_content_orderNo">工单号：20171122772967</p>
                            <div class="serviceH_content_aftersales">售后政策及收费标准</div>
                            <div class="serviceH_content_copy">复制</div>
                        </div>
                    </flexbox-item>
                </flexbox>
            </section>
            <!-- tab栏工单基本信息 -->
            <section>
                <div>我是工单基本信息</div>
            </section>
            <!-- 工单详情 -->
            <section>
                <group>
                    <cell title="上门联系信息"></cell>
                    <cell-form-preview :list="list2"></cell-form-preview>
                </group>
            </section>
        </div>
        <!--页面底部-->
        <div class="bottom ">
            <flexbox>
                <flexbox-item style="margin-left: unset;">
                    <x-button class="no-border-radius" style="background-color: #8dc121" type="primary">派旗下师傅</x-button>
                </flexbox-item>
                <flexbox-item style="margin-left: unset;">
                    <x-button class="no-border-radius" style="background-color: #5bb6ff" type="warn">接单自己做</x-button>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>

<script>
    import { XHeader, XButton, Flexbox, FlexboxItem, CellFormPreview, Group, Cell} from 'vux'
    import Box from "vux/src/components/box/index";

    export default {
        data() {
            return {
                list2: [{
                    label: '刘亮方',
                    value: '13533456679'
                }, {
                    label: '上门时间',
                    value: '2011-11-23 下午'
                }, {
                    label: '地址',
                    value: '广东省广州市天河区珠江新城华利路19号'
                }]
            }
        },
        components: {
            Box,
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
    @import url('../../assets/styles/ServiceDetail.less');
</style>