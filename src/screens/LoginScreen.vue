<template>
  <nb-container class="spinner-container" v-if="isCheckingUser">
    <nb-spinner color="blue" />
  </nb-container>
  <nb-container v-else :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>
          Login
        </nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <InputWithError 
            msg="Email is required"
            :error="$v.form.email.$dirty && !$v.form.email.required"
        >
          <nb-input 
            v-model="form.email" 
            placeholder="Email" 
            auto-capitalize="none"
            :on-blur="() => $v.form.email.$touch()"
           />
        </InputWithError>
        <InputWithError 
            msg="Password is required"
            :error="$v.form.password.$dirty && !$v.form.password.required"
        >
          <nb-input 
            v-model="form.password"
            placeholder="Password" 
            auto-capitalize="none" 
            secure-text-entry 
            :on-blur="() => $v.form.password.$touch()"
          />
        </InputWithError>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button :on-press="login" block>
          <nb-text>Login</nb-text>
        </nb-button>
      </view>
      <nb-button :on-press="goToRegister" transparent>
        <nb-text>Not Registered? Register Here</nb-text>
      </nb-button>
      <nb-button :on-press="goToHome" transparent>
        <nb-text>Navigate to home</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { Toast } from "native-base";

export default {
    props: {
        navigation: {
            type: Object
        }
    },
    data: () => ({
        isCheckingUser: false,
        form: {
            email: '',
            password: ''
        }
    }),
    created(){
        this.isCheckingUser = true;
        this.$store.dispatch('auth/verifyUser').then(() => {
            this.navigation.navigate('Home');
        }).catch(() => this.isCheckingUser = false)
    },
    methods: {
        login(){
            this.$v.form.$touch();

            if(!this.$v.form.$invalid){
                this.$store.dispatch('auth/login', this.form).then(user => {
                    this.navigation.navigate('Home');
                }).catch(e => {
                    Toast.show({
                        text: "Wrong email or password!",
                        buttonText: "Okay",
                        type: "danger",
                        duration: 3000
                    })
                })
            }
        },
        goToRegister(){
            this.navigation.navigate('Register');
        },
        goToHome(){
            this.navigation.navigate('Home');
        }
    },
    validations: {
        form: {
            email: {
                required
            },
            password: {
                required
            }
        }
    }
}
</script>

<style>
.spinner-container {
  display: flex;
  justify-content: center;
}
</style>