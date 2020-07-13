<script>
    export default {
        name:"VrCol",
        props: {
            span: {
            type: Number,
            default: 24
            },
            tag: {
            type: String,
            default: 'div'
            },
            offset: Number,
            push: Number,
            pull: Number,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            xl: [Number, Object]
        },

        computed: {
            gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'VrRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
            }
        },
        render(h) {
            let classList = [];
            let style = {};

            if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
            }

            ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                prop !== 'span'
                    ? `vr-col-${prop}-${this[prop]}`
                    : `vr-col-${this[prop]}`
                );
            }
            });

            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if (typeof this[size] === 'number') {
                classList.push(`vr-col-${size}-${this[size]}`);
            } else if (typeof this[size] === 'object') {
                let props = this[size];
                Object.keys(props).forEach(prop => {
                classList.push(
                    prop !== 'span'
                    ? `vr-col-${size}-${prop}-${props[prop]}`
                    : `vr-col-${size}-${props[prop]}`
                );
                });
            }
            });

            return h(this.tag, {
            class: ['vr-col', classList],
            style
            }, this.$slots.default);
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

    .vr-col-0 {
        display: none;
    }
    .vr-col-xs-0 {
        display: none;
    }
    .vr-col-sm-0 {
        display: none;
    }
    .vr-col-md-0 {
        display: none;
    }
    .vr-col-lg-0 {
        display: none;
    }
    .vr-col-xl-0 {
        display: none;
    }
     @for $i from 0 through 24 {
        .vr-col-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }

    @for $i from 0 through 24 {
        .vr-col-xs-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xs-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xs-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xs-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }

    @for $i from 0 through 24 {
        .vr-col-sm-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-sm-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-sm-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-sm-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }

    @for $i from 0 through 24 {
        .vr-col-md-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-md-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-md-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-md-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }

    @for $i from 0 through 24 {
        .vr-col-lg-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-lg-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }
        .vr-col-lg-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-lg-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }

    @for $i from 0 through 24 {
        .vr-col-xl-#{$i} {
            width: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xl-offset-#{$i} {
            margin-left: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xl-pull-#{$i} {
            position: relative;
            right: (1 / 24 * $i * 100) * 1%;
        }

        .vr-col-xl-push-#{$i} {
            position: relative;
            left: (1 / 24 * $i * 100) * 1%;
        }
    }
</style>
