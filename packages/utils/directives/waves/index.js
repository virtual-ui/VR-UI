import waves from './waves.js'

const install = function(Vue) {
    Vue.directive('wave', waves)
}

if (window.Vue) {
    window.wave = waves
    Vue.use(install); // eslint-disable-line
}

waves.install = install
export default waves;
