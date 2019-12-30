<template>
    <div>
        <v-navigation-drawer app v-model="drawer" mobile-break-point="650" style="color: white;">
            <v-list subheader>
                <v-subheader>Super Menu</v-subheader>
                <v-divider></v-divider>

                <v-list-item-group color="primary">
                    <v-list-item
                            v-for="link in links"
                            :key="link.url"
                            active-class="active"
                            :to="link.url"
                            :exect="link.exact">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{link.title}}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon :color="$route.meta.title === link.title ? 'primary' : 'grey'">mdi-file</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
                <v-divider></v-divider>
                <v-list-item-group color="primary">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>
                                Settings
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon>mdi-cogs</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-footer absolute>
                <v-spacer></v-spacer>
                <div>created by Mark P&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
        </v-navigation-drawer>
        <v-app-bar app :color="'indigo'">
            <v-app-bar-nav-icon @click="drawer = !drawer" style="color: white;"></v-app-bar-nav-icon>

            <v-toolbar-title style="color: white;">{{$route.meta.title}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="white">
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu left bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

    export default {
        data: () => ({
            drawer: true,
            links: [
                {title: 'Главная', url: '/', exact: true},
                {title: 'События', url: '/events'},
                {title: 'Участники', url: '/members'},
                {title: 'Календарь', url: '/calendar'}
            ]
        })
    }
</script>

<style scoped>

</style>