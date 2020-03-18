<template>
    <el-submenu :key="data.id" v-if="data.children">
        <template slot="title">{{data.title}}</template>
        <template  v-for="d in data.children">
            <resub :key="d.id" :data="d"></resub>
        </template>
    </el-submenu>
    <el-menu-item :key="data.id" v-else>
        <template>{{data.title}}</template>
    </el-menu-item> 
</template>
<script>
import elMenuItem from './components/el-menu-item.vue';
import elSubmenu from './components/el-submenu.vue';
export default {
    name: 'resub',  //可以根据当前的组件名使用自己
    props: {
        data: { //接收my-menu中的data

        }
    },
    components: {
        elMenuItem,
        elSubmenu
    }
}
</script>