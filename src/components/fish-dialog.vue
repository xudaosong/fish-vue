<template>
  <div v-show="show" :transition="maskTransition">
    <div class="fish-mask" @click="hideOnBlur && (show = false)"></div>
    <div class="fish-dialog" v-show="show" :transition="dialogTransition">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    hideOnBlur: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  }
}
</script>
<style lang="scss">
  .fish-mask{
      position: fixed;
      z-index: 1000;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .6);
  }
  .fish-dialog {
      position: fixed;
      z-index: 5000;
      max-width: 85%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      // background-color: @weuiDialogBackgroundColor;
      text-align: center;
      border-radius: 3px;
      overflow: hidden;
      .weui_dialog_confirm & {
          .weui_dialog_hd {
              padding: 1.2em 20px .5em;
          }
          .weui_dialog_bd {
              text-align: left;
          }
      }
  }

  // .fish_mask_transition{
  //     display: none;
  //     position: fixed;
  //     z-index: 1000;
  //     width: 100%;
  //     height: 100%;
  //     top: 0;
  //     left: 0;
  //     background: rgba(0,0,0,0);
  //     transition:background .3s;
  // }
</style>
<style lang="less">
.weui_mask {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
}

.weui_mask_transparent {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.weui_mask_transition{
    display: none;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
    transition:background .3s;
}
.weui_fade_toggle{
    background: rgba(0,0,0,.6);
}
@weuiDialogBackgroundColor: #FAFAFC;
@weuiDialogLineColor: #D5D5D6;
@weuiDialogLinkColor: #3CC51F;
@weuiDialogLinkActiveBc: #EEEEEE;

.weui_dialog {
    position: fixed;
    z-index: 5000;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: @weuiDialogBackgroundColor;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    .weui_dialog_confirm & {
        .weui_dialog_hd {
            padding: 1.2em 20px .5em;
        }
        .weui_dialog_bd {
            text-align: left;
        }
    }
}

.weui_dialog_hd {
    padding: 1.2em 0 .5em;
}

.weui_dialog_title {
    font-weight: 400;
    font-size: 17px;
}

.weui_dialog_bd {
    padding: 0 20px;
    font-size: 15px;
    /*color: @globalTextColor;*/
    word-wrap: break-word;
    word-break: break-all;
}

.weui_dialog_ft {
    position: relative;
    line-height: 42px;
    margin-top: 20px;
    font-size: 17px;
    display: flex;
    a {
        display: block;
        flex: 1;
        color: @weuiDialogLinkColor;
        text-decoration: none;
        /*.setTapColor;*/
        &:active {
            background-color: @weuiDialogLinkActiveBc;
        }
    }
    &:after {
        content: " ";
        /*.setTopLine(@weuiDialogLineColor);*/
    }
    .weui_dialog_confirm & {
        a {
            position: relative;
            &:after {
                content: " ";
                /*.setLeftLine(@weuiDialogLineColor);*/
            }
            &:first-child {
                &:after {
                    display: none;
                }
            }
        }
    }
}

.weui_btn_dialog {
    &.default {
        color: #353535;
    }
    &.primary {
        color: #0BB20C;
    }
}

@media screen and (min-width: 1024px) {
    .weui_dialog {
        width: 35%;
    }
}
</style>
