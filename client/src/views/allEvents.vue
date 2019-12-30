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
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        })
    }
</script>

<style scoped>

</style>