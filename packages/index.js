import button from './button';
import buttonList from './button';
import link from './link';
import icon from './icon'
import grid from './grid';
import layout from './layout';
// 所有组件列表
const components = [
    ...button,
    ...buttonList,
    ...grid,
    ...layout,
    link,
    icon
]

// 定义 install 方法，接收 Vue 作为参数
const install = function(Vue){
    // 判断是否安装，安装过就不继续往下执行
    if(install.installed) return;
    install.installd = true;
    components.map(component=>Vue.component(component.name,component))
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    // 所有组件，必须具有 install，才能使用 Vue.use()
    ...components
}
