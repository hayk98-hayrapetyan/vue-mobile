<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <AppNavigationEvents :onDidFocus="checkForMessage" />
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
        form: {
            email: '',
            password: ''
        }
    }),
    created(){
        const isAuth = this.$store.getters['auth/isAuth'];

        if(isAuth){
          this.navigation.navigate('Home');
        }
    },
    methods: {
        login(){
            this.$v.form.$touch();

            if(!this.$v.form.$invalid){
                this.$store.dispatch('auth/login', this.form).then(user => {
                    this.navigation.navigate('Home');
                }).catch(() => {
                    Toast.show({
                        text: "Wrong email or password!",
                        buttonText: "Okay",
                        type: "danger",
                        duration: 3000
                    })
                })
            }
        },
        checkForMessage(){
          const message = this.navigation.getParam('message');
          if(message){
            Toast.show({
                text: message,
                buttonText: "Okay",
                type: "success",
                duration: 3000
            })
          }
        },
        goToRegister(){
            this.navigation.navigate('Register');
        },
        goToHome(){
            this.navigation.navigate('Home');
        },
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
