import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm  (){
    const store = useStore();
    const router = useRouter();
    const {handleSubmit, isSubmitting, submitCount} = useForm();

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Введите Email')
            .email('Введите корректный Email')
    )

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Введите Email')
            .min(6, 'Слишком короткий')
    )
    const isToManyAttempt = computed (() => submitCount.value >= 3)

    const onSubmit = handleSubmit (async values=> {
        console.log('Form', values)
        try {
            await store.dispatch('auth/login', values)
            router.push('/')
        } catch (error) {}


    })
    watch (isToManyAttempt, val => {
        if (val) {
            setTimeout(()=> submitCount.value = 0, 1500 )
        }
    })
    return{
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isToManyAttempt,
    }

}
