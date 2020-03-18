<template>
    <div id="app">
        <el-menu>
            <!-- 默认循环第一层 -->
            <template v-for="i in data">
                <el-submenu :key="i.id"  v-if="i.children">
                    <template slot="title">{{i.title}}</template>
                    <!-- 把子菜单抽离出去 -->
                    <resub :data="i"></resub>
                </el-submenu>
                <el-menu-item :key="i.id" v-else>{{i.title}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
import elMenu from './components/el-menu.vue';
import elMenuItem from './components/el-menu-item.vue';
import elSubmenu from './components/el-submenu.vue';
import resub from './resub.vue';
export default {
    props: {
        data: {
            type: Array,
            default: ()=>[]
        }
    },
    components: {
        elMenu,
        elMenuItem,
        elSubmenu,
        resub
    }
}
</script>