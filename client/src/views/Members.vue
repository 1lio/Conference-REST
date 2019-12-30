<template>
    <v-row dense>
        <v-col cols="12">
            <v-card
                    color="#385F73"
                    dark
                    raised
            >
                <v-list-item three-line style="align-items: flex-start;">
                    <v-list-item-content>
                        <v-card-title class="headline">Members0</v-card-title>

                        <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and
                            offline.
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>Подробнее</v-btn>
                        </v-card-actions>
                    </v-list-item-content>

                    <div style="display: grid">
                        <v-card-actions>

                            <v-btn icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>

                        </v-card-actions>

                        <v-card-actions>
                            <v-btn fab style="margin-left: 20px;">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>

                </v-list-item>

            </v-card>
        </v-col>

        <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
        >
            <v-card
                    :color="item.color"
                    dark
            >
                <v-list-item three-line style="align-items: flex-start;">
                    <v-list-item-content>
                        <v-card-title
                                class="headline"
                                v-text="item.title"
                        ></v-card-title>

                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                        <v-card-actions>
                            <v-btn text>Подробнее</v-btn>
                        </v-card-actions>
                    </v-list-item-content>
                    <div style="display: grid">
                        <v-card-actions>

                            <v-btn icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>

                        </v-card-actions>

                        <v-card-actions>
                            <v-btn fab style="margin-left: 20px;">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-list-item>

            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Members",
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    title: 'Members1',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    title: 'Members2',
                    artist: 'Ellie Goulding',
                },
            ],
        })
    }
</script>

<style scoped>

</style>