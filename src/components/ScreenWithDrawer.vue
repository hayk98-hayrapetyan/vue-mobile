<template>
<nb-container>
  <nb-header>
    <nb-left>
      <nb-button transparent :on-press="toggleDrawer">
        <nb-icon name="menu" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>{{headerTitle}}</nb-title>
    </nb-body>
    <nb-right>
      <nb-button transparent>
        <nb-icon name="menu" />
      </nb-button>
    </nb-right>
  </nb-header>
  <slot />
</nb-container>
</template>

<script>
import {DrawerActions} from 'react-navigation-drawer';

export default {
    props: {
      navigation: Object,
      headerTitle: {
          type: String,
          default: 'Header'
      }
    },
    methods: {
      toggleDrawer(){
        this.navigation.dispatch(DrawerActions.toggleDrawer())
      }
    }
}
</script>

<style>
.text-color-primary {
  color: blue;
}
</style>
