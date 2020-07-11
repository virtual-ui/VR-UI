<script>
    export default {
        name:"VrRow",
        componentName: 'VrRow',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            gutter: Number,
            type: String,
            justify: {
                type: String,
                default: 'start'
            },
            align: {
                type: String,
                default: 'top'
            }
        },

        computed: {
            style() {
            const ret = {};

            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft;
            }

            return ret;
            }
        },

        render(h) {
            return h(this.tag, {
            class: [
                'vr-row',
                `vr-row-${this.type}`,
                `vr-row-flex-${this.justify}`,
                `vr-row-flex-${this.align}`
                // this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                // this.align !== 'top' ? `is-align-${this.align}` : '',
                // { 'vr-row-flex': this.type === 'flex' }
            ],
            style: this.style
            }, this.$slots.default);
        }
};
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
           &-start{
               justify-content: flex-start;
           }
           &-center{
               justify-content: center;
           }
           &-end{
               justify-content: flex-end;
           }
           &-space-between{
                justify-content: space-between;
           }
           &-space-around{
                justify-content: space-around;
           }
           &-space-evenly{
                justify-content: space-evenly;
           }
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

    @for $i from 0 through 24 {
        $cnum: ($i + 1) * 2;
        .vr-row-gutter-#{$cnum} {
            margin-left: -#{$cnum / 2}px; margin-right: -#{$cnum / 2}px;
            [class*="vr-col-"] {
            padding-left: #{$cnum / 2}px; padding-right: #{$cnum / 2}px;
            }
        }
    }
</style>
