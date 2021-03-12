<template>
<view>
    <nb-card-item bordered>
        <nb-body>
            <nb-text :style="Styles.label">Date</nb-text>
            <nb-text>{{meetup.startDate}}</nb-text>

            <nb-text :style="Styles.label">From</nb-text>
            <nb-text>{{meetup.timeFrom}}</nb-text>

            <nb-text :style="Styles.label">To</nb-text>
            <nb-text>{{meetup.timeTo}}</nb-text>

            <nb-text :style="Styles.label">Category</nb-text>
            <nb-text>{{category.name}}</nb-text>

            <nb-text :style="Styles.label">Info</nb-text>
            <nb-text>{{meetup.shortInfo}}</nb-text>
        </nb-body>
    </nb-card-item>
    <nb-card-item header bordered>
        <nb-text>Description</nb-text>
    </nb-card-item>
    <nb-card-item bordered>
        <nb-body>
            <nb-text>{{meetup.description}}</nb-text>
        </nb-body>
    </nb-card-item>
</view>
</template>

<script>
import Styles from "@/styles";

export default {
    props: {
        meetup: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        Styles
    }),
    computed: {
        category(){
            return this.meetup.category || {}
        }
    },
}
</script>

<style>

</style>