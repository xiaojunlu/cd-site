<template>
  <header class="site-header">
    <div class="site-header__logo">
      <router-link :to="{name: 'homepage'}">
        <img src="/static/img/logo@2x.png" srcset="/static/img/logo.png 1x, /static/img/logo@2x.png 2x" alt="">
      </router-link>
    </div>
    <div class="site-header__nav cd-clearfix">
      <ul class="">
        <li :class="{ active: routeName === nav.name }" 
            @click="switchNav(nav.name)" 
            v-for="(nav, index) in navMenu" 
            :key="index">
          {{nav.text}}
        </li>
      </ul>
      <theme-picker @ok="pickerOk">
        <embed src="/static/svg/color.svg" type="" height="13" width="10" style="vertical-align: middle; margin-top: -2px">
        主题色
      </theme-picker>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import ThemePicker from '@/components/theme-picker.vue';
import { version } from 'codeages-design/package.json';
import { navMenu } from '@/data';

@Component({
  components: {
    ThemePicker,
  },
})
export default class extends Vue {
  navMenu: any[] = navMenu;
  routeName: string = null;
  chalk: string = (<any>window).chalk;

  created() {
    this.getRoute();
  }

  getRoute() {
    this.routeName = this.$route.matched[0].name;
  }

  switchNav(name) {
    this.$router.push({ name: name });
  }

  pickerOk(oldColor, newColor) {
    const chalkHandler = this.getHandler(oldColor, newColor, 'chalk-style');

    if (!this.chalk) {
      const url = `https://unpkg.com/codeages-design@${version}/dist/cd-main-color.css`;
      this.getCSSString(url, chalkHandler);
    } else {
      chalkHandler();
    };

    const styles = [].slice.call(document.querySelectorAll('style'))
      .filter(style => {
        const text = style.innerText;
        return new RegExp(oldColor.hex, 'i').test(text) && /.site-/.test(text) && !/@font-face/.test(text);
      })

    styles.forEach(style => {
      const { innerText } = style;
      if (typeof innerText !== 'string') return;
      style.innerText = this.updateStyle(innerText, oldColor, newColor);
    });

    cd.message({
      type: 'success',
      message: '修改主色调成功'
    });
  }

  getHandler(oldColor, newColor, id) {
    return () => {
      const newStyle = this.updateStyle(this.chalk, oldColor, newColor);

      this.chalk = newStyle;
      (<any>window).chalk = newStyle;

      let styleTag = document.getElementById(id);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.setAttribute('id', id);
        document.head.appendChild(styleTag);
      }
      styleTag.innerText = newStyle;
    }
  }

  updateStyle(style, oldColor, newColor) {
    let newStyle = style;

    const rgb = (color) => {
      return [color.rgba.r, color.rgba.g, color.rgba.b].join(',');
    }

    newStyle = newStyle.replace(new RegExp(oldColor.hex, 'ig'), newColor.hex);
    newStyle = newStyle.replace(new RegExp(rgb(oldColor), 'ig'), rgb(newColor));

    return newStyle;
  }

  getCSSString(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.chalk = xhr.responseText;
        (<any>window).chalk = xhr.responseText;
        callback();
      }
    }
    xhr.open('GET', url);
    xhr.send();
  }
}
</script>
