<template>
    <div>
        <my-menu :data="list"></my-menu>
    </div>
</template>
<script>
import myMenu from './my-menu.vue';
export default {
    components: {
        myMenu
    },
    data() {
        return {
            list: [
                {
                    title: 'root1',
                    id: 1
                },
                {
                    title: 'root1',
                    id: 3,
                    children: [
                        {
                            title: 'root 1-1',
                            id: '4',
                            children: [
                                {
                                    title: 'root 1-1-1',
                                    id: '6',
                                    children: [
                                        {
                                            id: 7,
                                            title: 'root 1-1-1-1'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    
}
</script>