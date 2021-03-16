<template>
  <view class="category">
        <nb-picker
            mode="dropdown"
            :style="{ width: 350 }"
            placeholder="Select Time"
            placeholderStyle="{ color: '#bfc6ea' }"
            :selectedValue="selectedValue"
            :onValueChange="handleTimeChange"
        >
            <nb-item 
                v-for="time in generateTimes"
                :key="time"
                :label="time"
                :value="time" 
            />
        </nb-picker>
    </view>
</template>

<script>
export default {
    props: {
        onValueChange: {
            type: Function,
            required: true
        }
    },
    data: () => ({
        selectedValue: ''
    }),
    computed: {
        generateTimes () {
            const times = []; // time array
            let tt = 0; // start time

            // times = [00:00, 00:30, 01:00, 01:30, 02:00 ...]
            //loop to increment the time and push results in array
            for (let i=0;tt<24*60; i++) {
                const hh = Math.floor(tt/60); // getting hours of day in 0-24 format
                const mm = (tt%60); // getting minutes of the hour in 0-55 format
                // Format time to format hh:mm
                times[i] = ("0" + (hh >= 12 ? hh % 24 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2)
                tt += 30; // time + interval of 30 minutes
            }
            times.push('23:59')
            return times
        }
    },
    methods: {
        handleTimeChange(time){
            this.selectedValue = time;
            this.onValueChange(time);
        }
    }
}
</script>

<style scoped>
.category {
    flex: 1;
    align-self: stretch;
    padding-left: 0;
    margin-left: 0;
    height: 50;
}
</style>