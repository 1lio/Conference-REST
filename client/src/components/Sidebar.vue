<template>
    <div>
        <v-navigation-drawer app v-model="drawer" mobile-break-point="650" style="color: white;">
            <v-list subheader>
                <v-subheader>Конференции ЕГУ</v-subheader>

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
            </v-list>
        </v-navigation-drawer>


        <v-app-bar app :color="'indigo'">
            <v-app-bar-nav-icon @click="drawer = !drawer" style="color: white;"></v-app-bar-nav-icon>

            <v-toolbar-title style="color: white;">{{$route.meta.title}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon color="white">
                <v-icon>mdi-bell</v-icon>
            </v-btn>

        </v-app-bar>
    </div>
</template>

<script>

    export default {
        data: () => ({
            drawer: true,
            links: [
              //  {title: 'Главная', url: '/', exact: true},
                {title: 'События', url: '/events'},
                {title: 'Участники', url: '/members'},
            //    {title: 'Календарь', url: '/calendar'}
            ]
        })
    }
</script>

<style scoped>

</style>