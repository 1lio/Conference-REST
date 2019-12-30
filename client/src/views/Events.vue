<template>
<div>
    <v-tabs v-model="tab" fixed-tabs>
        <v-tab to="/events">
            Все события
        </v-tab>
        <v-tab to="/events/add">
            Добавить
        </v-tab>
        <v-tab to="/events/complete">
            Завершенные
        </v-tab>
        <v-tab to="/events/archive">
            Архив
        </v-tab>
    </v-tabs>

    <router-view v-if="($route.path !== '/events')"/>

    <v-row dense v-else style="margin: 20px 15% 10px 15%">
        <v-col cols="12">Начавшиеся</v-col>
        <v-col
                v-for="(event, index) in eventsStarted"
                :key="event._id"
                cols="12"
                v-show="index === 0 || index === 1 || index === 2 && visible1 || !visible1"
        >
            <v-card ark>
                <v-list-item two-line>
                    <v-list-item-avatar
                            tile
                            size="80"
                    >
                        <v-icon size="80">mdi-clock</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1" v-text="event.title"></v-list-item-title>
                        <v-list-item-subtitle>
                            <v-icon>mdi-clock</v-icon>
                            <v-icon>mdi-clock</v-icon>
                            <v-icon>mdi-clock</v-icon>
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-card-actions>
                        <v-list-item style="display: grid; padding: unset;">
                            <v-list-item-subtitle>
                                <v-list-item-icon style="margin: 0 9px;">
                                    {{event.date}}<br/>
                                    {{event.time}}
                                </v-list-item-icon>
                                <v-btn icon @click.stop="getDeleteEvent(event._id, eventsStarted, index)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-subtitle>

                            <v-btn text>Завершить</v-btn>

                        </v-list-item>

                    </v-card-actions>
                </v-list-item>
            </v-card>
        </v-col>
        <small v-if="eventsStarted.length >= 4" style="width: 100%; text-align: center; margin: 10px;">Еще ... <v-btn @click="visible1=!visible1" icon>{{eventsStarted.length - 3}}</v-btn></small>
        <small v-else-if="eventsStarted.length >= 1" style="width: 100%; text-align: center; margin: 10px;"></small>
        <small v-else-if="eventsStarted.length >= 0" style="width: 100%; text-align: center; margin: 10px;">Событий пока нет.</small>

        <v-col cols="12">Запланированные</v-col>
        <v-col
                v-for="(event, index) in eventsPlaned"
                :key="event._id"
                cols="12"
                v-if="index === 0 || index === 1 || index === 2 && visible2 || !visible2"
        >
            <v-card ark>
                <v-list-item two-line>
                    <v-list-item-avatar
                            tile
                            size="80"
                    >
                        <v-icon size="80">mdi-clock</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="headline mb-1" v-text="event.title"></v-list-item-title>
                        <v-list-item-subtitle>
                            <v-icon>mdi-clock</v-icon>
                            <v-icon>mdi-clock</v-icon>
                            <v-icon>mdi-clock</v-icon>
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-card-actions>
                        <v-list-item style="display: grid; padding: unset;">
                            <v-list-item-subtitle>
                                <v-list-item-icon style="margin: 0 9px;">
                                    {{event.date}}<br/>
                                    {{event.time}}
                                </v-list-item-icon>
                                <v-btn icon @click="getDeleteEvent(event._id, eventsPlaned, index)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-list-item-subtitle>

                            <v-btn text>Завершить</v-btn>

                        </v-list-item>

                    </v-card-actions>
                </v-list-item>
            </v-card>
        </v-col>
        <small v-if="eventsPlaned.length >= 4" style="width: 100%; text-align: center; margin: 10px;">Еще ... <v-btn @click="visible2=!visible2" icon>{{eventsPlaned.length - 3}}</v-btn></small>
        <small v-else-if="eventsPlaned.length >= 1" style="width: 100%; text-align: center; margin: 10px;"></small>
        <small v-else-if="eventsPlaned.length >= 0" style="width: 100%; text-align: center; margin: 10px;">Событий пока нет.</small>
    </v-row>

    <v-snackbar
            v-model="snackbar"
            right
            top
            color="green"
            :timeout="2000"
    >
        {{ text }}
        <v-btn
                text
                @click="snackbar = false"
        >
            Close
        </v-btn>
    </v-snackbar>

    <v-dialog
            v-model="dialog"
            max-width="350"
    >
        <v-card>
            <v-card-title class="headline">Подтвердите действие</v-card-title>

            <v-card-text>
                Вы правда хотите удалить данное событие? Оно удалится без возможности восстановления.
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                >
                    Нет
                </v-btn>

                <v-btn
                        color="green darken-1"
                        text
                        @click="eventDelete()"
                >
                    Да
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</div>

</template>

<script>
    import EventServise from "../servise/eventServise";

    export default {
        name: "Events",
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    title: 'Supermodel'
                },
                {
                    color: '#952175',
                    title: 'Halcyon Days'
                },
            ],
            text: '',
            snackbar: false,
            id: '',
            eventArray: [],
            index: null,
            alert: false,
            dialog: false,
            visible1: true,
            visible2: true,
            eventsPlaned: [],
            eventsStarted: [],
            eventsFinished: [],
            eventsRePlaced: [],
            eventsCanceled: [],
            error: [],
            tab: null
        }),
        async created() {
            try {
                // get all Events
                this.eventsPlaned = await EventServise.getEvents(0)
                this.eventsStarted = await EventServise.getEvents(1)
                this.eventsFinished = await EventServise.getEvents(2)
                this.eventsRePlaced = await EventServise.getEvents(3)
                this.eventsCanceled = await EventServise.getEvents(4)

            } catch (err) {
                this.error = err.message
            }
        },
        methods: {
            getDeleteEvent(id, eventArray, index) {
                if (this.id !== '') {
                    this.id = ''
                }
                this.id = id

                if (this.eventArray !== []){
                    this.eventArray = []
                }
                this.eventArray = eventArray

                if (this.index !== null) {
                    this.index = null
                }
                this.index = index

                this.dialog = true
            },
            async eventDelete() {
                if (this.id !== '' || this.eventArray !== [] || this.index !== null) {
                    await EventServise.deletePost(this.id)
                    this.$delete(this.eventArray, this.index)
                    this.text = 'Удаление новости прошло успешно'
                    this.dialog = false
                    this.snackbar = true
                } else {
                    this.text = 'Что-то пошло не так'
                    this.dialog = false
                    this.snackbar = true
                }
            }
        }
    }
</script>

<style scoped>

</style>
