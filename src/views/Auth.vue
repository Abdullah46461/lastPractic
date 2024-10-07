<template>
 <form class="card" @submit.prevent="onSubmit">

<h1>Войти в систему</h1>

<div :class="['form-control', {invalid: eError}]">
  <label for="email">Email</label>
  <input type="email" id="email" v-model="email" @blur="eBlur">
  <small v-if="eError">{{eError}}</small>
</div>

<div :class="['form-control', {invalid: pError}]">
  <label for="password">Пароль</label>
  <input type="password" id="password" v-model="password" @blur="pBlur">
  <small v-if="pError">{{pError}}</small>
</div>
<button class="btn primary" type="submit" :disabled="isSubmitting || isToManyAttempt">Войти</button>
<div class="text-danger" v-if="isToManyAttempt">Вы слишком часто пытаетесь войти</div>
  </form>
</template>

<script>

import {useLoginForm} from '../components/use/login-form.ts'
import {useRoute} from "vue-router";
export default {
  setup() {
    const route = useRoute()
    return{...useLoginForm()}
  }
}
</script>

<style lang="css" scoped>

</style>
