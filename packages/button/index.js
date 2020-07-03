import buttonGroup from "./src/button-group";
import button from "./src/button";

button.install = Vue =>{
    Vue.component(button.name,button);
}

buttonGroup.install = Vue=>{
    Vue.component(buttonGroup.name,buttonGroup)
}
export default [button,buttonGroup];
