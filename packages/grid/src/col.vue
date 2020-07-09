<script>
    export default {
        name:"VrCol",
        props:{
            offset:{
                type:Number,
                default:0
            },
            order:{
                type:Number,
                default:0
            },
            pull:{
                type:Number,
                default:0
            },
            push:{
                type:Number,
                default:0
            },
            span:{
                type:Number,
                default:null
            },
            xs:{
                type:[Number,Object],
                default:()=>{}
            },
            sm:{
                type:[Number,Object],
                default:()=>{}
            },
            md:{
                type:[Number,Object],
                default:()=>{}
            },
            lg:{
                type:[Number,Object],
                default:()=>{}
            },
            xl:{
                type:[Number,Object],
                default:()=>{}
            },
            xxl:{
                type:[Number,Object],
                default:()=>{}
            },
            tag:{
                type:String,
                default:"div"
            }
        },
        computed:{
            gutter(){
                let parent = this.$parent;
                while(parent && parent.$options.componentName !== 'VrRow'){
                    parent = parent.$parent;
                }
                return parent ? parent.gutter :0;
            }
        },
        render(h){
            let classList = [];
            classList.push(`vr-col-${this.span}`);
            const style = this.style(this.gutter);
            return h(this.tag,{
                class:[
                    'vr-col',
                    [...classList]
                ],
                style:style
            },this.$slots.default)
        },
        methods:{
            style(gutter){
                let style = {paddingTop:'', paddingRight:'',
                    paddingBottom:'', paddingLeft:''};
                let type = Object.prototype.toString.call(gutter)
                switch (type) {
                    case "[object Number]":
                        Object.keys(style).forEach(key=>{
                            style[key] = gutter / 2 + 'px';
                        });
                        break;
                    case "[object Object]":  
                        break;
                    case "[object Array]":
                        if(!gutter.length || gutter.length > 2){
                            return;
                        }else {
                            Object.keys(style).forEach((key,index)=>{
                                if(gutter.length === 1){
                                    style[key] = (index + 1) % 2 === 0 ? gutter[0] / 2 + 'px' : "";
                                }else if(gutter.length === 2){
                                    style[key] = (index + 1) % 2 !== 0 ? gutter[0] / 2 + 'px' : gutter[1] / 2 + 'px';
                                }
                            })
                        }
                        break;
                    default:
                        return;
                }
                return style
            }
        }
    }
</script>
<style lang="scss" scoped>
    .vr-col{
        float: left;
        box-sizing: border-box;
    }
    @for $i from 0 through 24 {
        .vr-col-#{$i} {
            @if $i==0{
                display: none;
            }@else {
                width: (1 / 24 * $i * 100) * 1%;
            }
        }
    }
</style>
