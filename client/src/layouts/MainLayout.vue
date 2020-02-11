<template>
    <div>

        <Sidebar/>

        <v-content style="margin: 10px;">


            <router-view/>
        </v-content>

    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar'

    export default {
        name: "MainLayout",
        components: {
            Sidebar
        }
    }
</script>

<style scoped>

</style>