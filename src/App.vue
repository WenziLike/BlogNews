<template>
    <!-- ======================== Header-->
    <TheNavBar/>
    <div class="container">
        <!-- ======================== Content-->
        <div class="wrapper-content">
                <router-view/>
        </div>
        <!-- ======================== Footer-->
    </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'
import { actionTypes } from '@/store/modules/auth'

export default {
    name: 'App',
    components: { TheNavBar },
    mounted() {
        this.$store.dispatch(actionTypes.getCurrentUser)
    }
}
</script>
