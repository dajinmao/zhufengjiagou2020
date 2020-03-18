<template>
    <div id="app">
        <button @click="show">点击</button>
    </div>
</template>
<script>
import {Message} from './components/message.js';
export default {
    methods: {
        show() {
            Message.warning({message: 'hello'});
        }
    }
}
</script>