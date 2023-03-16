import { createApp } from 'vue'
import App from './App.vue'
import { Button, Cell } from 'vant';
import 'vant/lib/index.css';

createApp(App).use(Button).use(Cell).mount('#app')  // 将vant的组件引入到项目中cell用来做列表

// createApp(App).use(Button).mount('#app')
