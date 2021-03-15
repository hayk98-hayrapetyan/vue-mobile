<template>
    <nb-header>
      <nb-left>
        <nb-button v-if="!root" :on-press="goBack" transparent>
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>{{screen}}</nb-title>
      </nb-body>
      <nb-right>
        <nb-button transparent>
          <nb-icon name="menu" />
        </nb-button>
      </nb-right>
    </nb-header>
</template>

<script>
export default {
    props: {
        screen: {
            type: String,
            default: 'Header'
        },
        root: {
            type: Boolean
        },
        navigation: {
            type: Object,
            required: true
        }
    },
    methods: {
        goBack(){
            this.navigation.goBack();
        }
    }
}
</script>

<style>

</style>