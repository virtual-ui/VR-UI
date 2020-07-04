import row from './src/row';
import col from './src/col';

row.install = (Vue)=>{
    Vue.component(row.name,row);
}
col.install = (Vue)=>{
    Vue.component(col.name,col);
}
export default [row,col];
