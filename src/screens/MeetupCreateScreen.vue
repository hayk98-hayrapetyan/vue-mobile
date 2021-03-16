<template>
<nb-container>
    <!-- Provide Navigation to App Header -->
    <AppHeader :navigation="navigation" />
    <!-- Provide Styles Here -->
    <view :style="styles.container">
        <nb-text :style="styles.headerOne">Create Meetup</nb-text>
    </view>
    <nb-content>
        <nb-form>
            <nb-item stackedLabel>
                <nb-label>Location</nb-label>
                <nb-input v-model="form.location"/>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Title</nb-label>
                <nb-input v-model="form.title"/>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Start Date</nb-label>
                <!-- <nb-input v-model="form.startDate"/> -->
                <view class="category">
                    <nb-date-picker
                        :defaultDate="defaultDate"
                        :value="form.startDate"
                        :minimumDate="minimumDate"
                        :maximumDate="maximumDate"
                        :modalTransparent="false"
                        animationType="fade"
                        androidMode="default"
                        placeHolderText="Select date"
                        :textStyle="{ color: 'green' }"
                        :placeHolderTextStyle="{ color: '#d3d3d3' }"
                        :onDateChange="() => setDate()"
                    />
                </view>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Time From</nb-label>
                <!-- <nb-input v-model="form.timeFrom"/> -->
                <AppTimePicker :onValueChange="(time) => setTime(time, 'timeFrom')" />
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Time To</nb-label>
                <!-- <nb-input v-model="form.timeTo"/> -->
                <AppTimePicker :onValueChange="(time) => setTime(time, 'timeTo')" />
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Category</nb-label>
                <view class="category">
                    <nb-picker
                        mode="dropdown"
                        :style="{ width: 350 }"
                        placeholder="Select category"
                        placeholderStyle="{ color: '#bfc6ea' }"
                        :selectedValue="selectedValue"
                        :onValueChange="onCategoryChange"
                    >
                        <nb-item 
                            v-for="category in categories"
                            :key="category._id"
                            :label="category.name"
                            :value="category" 
                        />
                    </nb-picker>
                </view>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Image</nb-label>
                <nb-input v-model="form.image"/>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Description</nb-label>
                <nb-input v-model="form.description"/>
            </nb-item>
            <nb-item stackedLabel>
                <nb-label>Additional Info</nb-label>
                <nb-input v-model="form.shortInfo"/>
            </nb-item>
            <nb-button :on-press="createMeetup" block>
                <nb-text>Create Meetup</nb-text>
            </nb-button>
        </nb-form>
    </nb-content>
</nb-container>
</template>

<script>
import styles from '@/styles';
// import KeyboardAvoidingView from 'react-native'; 

export default {
    // components: {KeyboardAvoidingView},
    props: {
        navigation: {
            type: Object
        }
    },
    data: () => ({
        styles,
        form: {
            location: null,
            title: null,
            startDate: new Date(),
            category: null,
            image: null,
            shortInfo: null,
            description: null,
            timeTo: null,
            timeFrom: null
        },
    }),
    computed: {
        categories(){
            return this.$store.state.categories.items;
        },
        selectedValue(){
            return this.form.category || (this.hasCategories && this.categories[0]);
        },
        hasCategories(){
            return this.categories && this.categories.length;
        },
        defaultDate(){
            return new Date();
        },
        minimumDate(){
            return new Date();
        },
        maximumDate(){
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            const day = new Date().getDate();
            return new Date(year + 1, month, day);
        }
    },
    created(){
        this.$store.dispatch('categories/fetchCategories');
    },
    methods: {
        createMeetup () {
            alert(JSON.stringify(this.form))
        },
        onCategoryChange(category){
            this.form.category = category;
        },
        setDate(date){
            alert(new Date(date.timestamp));
            this.form.startDate = new Date(date.timestamp);
        },
        setTime(time, label){
            this.form[label] = time;
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