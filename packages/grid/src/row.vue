<script>
    export default {
        name:"VrRow",
        componentName: 'VrRow',
        props:{
            type:{
                type:String,
                default:""
            },
            gutter:{
                type:[Number,Object,Array],
                default: 0
            },
            justify:{
                type:String,
                default:"start"
            },
            align:{
                type:String,
                default:"top"
            },
            tag:{
                type:String,
                default:"div"
            }
        },
        computed: {
            style() {
                const ret = {
                    marginLeft:"",
                    marginRight:""
                };
                let type = Object.prototype.toString.call(this.gutter)
                switch (type) {
                    case "[object Number]":
                        ret.marginLeft = `-${this.gutter / 2}px`;
                        ret.marginRight = ret.marginLeft;
                        break;
                    case "[object Object]":
                        break;
                    case "[object Array]":
                        ret.marginLeft = `-${(this.gutter[1]||this.gutter[0]) / 2}px`;
                        ret.marginRight = ret.marginLeft;
                        break;
                    default:
                        return;
                }
                return ret;
            }
        },
        render(h){  
            return h(this.tag,{
                class:[
                    'vr-row',
                    `vr-row-${this.type}`,
                    `vr-row-flex-${this.align}`
                ],
                style:{
                    ...this.style
                }
            },this.$slots.default);
        }
    }
</script>
<style lang="scss" scoped>
   .vr-row{
       position: relative;
       box-sizing: border-box;
       margin-left: 0;
       margin-right: 0;
       overflow: auto;
       zoom: 1;
       height: auto;
       text-align: center;
       &-flex{
           display: flex;
           &-top{
               align-items: flex-start;
           }
           &-center{
               align-items: center;
           }
           &-bottom{
               align-items: flex-end;
           }
       }
       &:before{
           clear: both;
       }
       &:before,&:after{
           display: table;
           content: "";
       }
   }
</style>
