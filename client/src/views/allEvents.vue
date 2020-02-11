<template>
    <h1>Page all</h1>
</template>

<script>
    export default {
        name: "allEvents",
        data: () => ({
            items: [
                {
                    color: '#1F7087',
                    title: 'Supermodel',
                    artist: 'Foster the People',
                },
                {
                    color: '#952175',
                    title: 'Halcyon Days',
                    artist: 'Ellie Goulding',
                },
            ],
            tab: null,
            itemsTab: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
            text: 'at.'
        })
    }
</script>

<style scoped>

</style>