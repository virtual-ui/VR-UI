import Icon from './src/icon';
Icon.install = (Vue)=>{
    Vue.component(Vue.name,Icon)
};
export default Icon;
