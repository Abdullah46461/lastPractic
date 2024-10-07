<template>
<component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import {computed} from "vue"
import {useRoute} from 'vue-router'
import MainLayout from "./components/layout/MainLayout.vue";
import AuthLayout from "./components/layout/AuthLayout.vue";


export default {
  setup(){
    const route = useRoute()
    return{

        layout: computed(() => route.meta.layout)
    }
    computed:{

    }
  },
  components:{MainLayout,AuthLayout}

}
</script>

<style lang="css" scoped>

</style>
