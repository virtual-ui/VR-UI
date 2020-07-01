import button from "./src/button";
import buttonGroup from "./src/button-group";

button.install = Vue =>{
    Vue.component(button.name,button);
}

buttonGroup.install = Vue=>{
    Vue.component(buttonGroup.name,buttonGroup)
}
export default {button,buttonGroup};
