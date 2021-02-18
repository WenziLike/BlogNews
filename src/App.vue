<template>
    <TheNavBar/>
    <router-view/>
</template>

<script>
import TheNavBar from '@/components/TheNavBar'

export default {
    name: 'App',
    components: { TheNavBar }
}
</script>
