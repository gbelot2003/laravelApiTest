<template>
    <v-app id="inspire">

        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import NavBar from './components/base/Navbar.vue';
    export default {
        data: () => ({
            drawer: null
        }),
        props: {
            source: String
        }
    }
</script>

<style>
</style>