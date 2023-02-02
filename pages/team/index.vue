<template>
    <section>
        <h1>Our Team</h1>

        <ul>
            <!-- выдает ошибку, говоря, что team не определен, this не помогает -->
            <li v-for="employee of team" :key="employee.id">
                <a href="#" @click.prevent="openEmployee(employee)">{{ employee.name }}: {{ employee.username }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    async fetch({ store }) {
        //console.log(store.getters['teams/team'])
        if (store.getters['teams/team'].length === 0) {
            await store.dispatch('teams/fetchTeam')
            //console.log(store.getters['teams/team'])
        }
    },
    computed: {
        team() {
            return this.$store.getters['teams/team']
        }
    },
    methods: {
        // Переход на страницу работника по его айди
        openEmployee(employee) {
            this.$router.push('/team/' + employee.id)
        }
    }
}
</script>

<style lang='scss'>
ul {
    margin-top: 20px;
}

li {
    font-size: 20px;
    opacity: 0.7;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
}

// only if user on PC
@media (any-hover:hover) {
    a:hover {
        color: #58f;
    }
}
</style>