<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>Register</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <InputWithError 
            msg="Minimum length is 8 characters!"
            :error="$v.form.username.$dirty && !$v.form.username.minLength"
        >
          <nb-input 
            v-model="form.username" 
            placeholder="Username" 
            auto-capitalize="none" 
            :on-blur="() => $v.form.username.$touch()"
          />
        </InputWithError>
        <nb-item>
          <nb-input 
            v-model="form.name" 
            placeholder="Full Name" 
            auto-capitalize="none" 
          />
        </nb-item>
        <InputWithError 
            msg="Email is not valid!"
            :error="$v.form.email.$dirty && !$v.form.email.email"
        >
          <nb-input 
            v-model="form.email" 
            placeholder="Email" 
            auto-capitalize="none" 
            :on-blur="() => $v.form.email.$touch()"
          />
        </InputWithError>
        <nb-item>
          <nb-input 
            v-model="form.avatar" 
            placeholder="Avatar Url" 
            auto-capitalize="none" 
          />
        </nb-item>
        <InputWithError 
            msg="Password is required!"
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
        <InputWithError 
            msg="Password confirmation needs to be same as password"
            :error="$v.form.passwordConfirmation.$dirty && !$v.form.passwordConfirmation.sameAsPassword"
        >
          <nb-input 
            v-model="form.passwordConfirmation" 
            last 
            placeholder="Password Confirmation" 
            auto-capitalize="none" 
            secure-text-entry
            :on-blur="() => $v.form.passwordConfirmation.$touch()"
          />
        </InputWithError>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button block :on-press="register">
          <nb-text>Register</nb-text>
        </nb-button>
      </view>
      <nb-button :on-press="goToLogin" transparent>
        <nb-text>Already Registered? You Can Login Here</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators';
import { Toast } from 'native-base'; 

export default {
    props: {
        navigation: {
            type: Object
        }
    },
    data: () => ({
        form: {
            username: '',
            name: '',
            avatar: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }),
    methods: {
        register(){
            this.$v.form.$touch();

            if(!this.$v.form.$invalid){
              this.$store.dispatch('auth/register', this.form)
                .then(() => this.navigateToLogin())
                .catch((e) => {
                  alert(e);
                  Toast.show({
                      text: "Ooops something gone wrong!",
                      buttonText: "Okay",
                      type: "danger",
                      duration: 3000
                  })
                })
            }
        },
        goToLogin(){
            this.navigation.navigate('Login');
        },
        navigateToLogin(){
          this.navigation.navigate('Login', {message: "You have been successfully registered. You can login now :)"});
        }
    },
    validations: {
        form: {
            email: {
                email
            },
            password: {
                required
            },
            passwordConfirmation: {
                sameAsPassword: sameAs('password')
            },
            username: {
                required,
                minLength: minLength(8)
            }
        }
    }
}
</script>

<style>

</style>