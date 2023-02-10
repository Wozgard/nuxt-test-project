<template>
    <section class="team">
        <h1 class="team__title">Our Team</h1>

        <ul class="team__list">
            <li v-for="employee of team" :key="employee._id" class="team__employee">
                <a href="#" @click.prevent="openEmployee(team.indexOf(employee))">{{ employee.name }}: {{ employee.job }}</a>
                <button v-if="employee.delete" class="team__del" @click.prevent="delEmployee(employee._id)"></button>
            </li>
        </ul>
        <div class="team__add-form">
            <div v-if="err" class="team__error">Empty or uncorrect field</div>
            <input type="text" placeholder="Name" v-model="body.name">
            <input type="text" placeholder="Job" v-model="body.job">
            <button class="team__add-button" type="submit" @click.prevent="addEmployee(body)">Add Employee</button>
        </div>
    </section>
</template>

<script>
export default {
    async fetch({ store }) {
        if (store.getters['teams/team'].length === 0) {
            await store.dispatch('teams/fetchTeam')
        }
    },
    data() {
        return {
            body: {
                name: '',
                job: '',
                delete: true
            },
            err: false
        }
    },
    computed: {
        team() {
            return this.$store.getters['teams/team']
        }
    },
    methods: {
        // Переход на страницу работника по его айди
        openEmployee(id) {
            this.$router.push('/team/' + id)
        },
        // Ckeck correct field & Add new employee in team
        async addEmployee(body) {
            this.err = false
            body.name = body.name.trim()
            body.job = body.job.trim()

            if (body.name == '' || body.job == '') {
                this.err = true
            }
            else {
                try {
                    await this.$store.dispatch('teams/addEmployee', body)
                    window.location.reload()
                }
                catch (e) {
                    console.log(e)
                }
            }
        },
        async delEmployee(_id) {
            if (_id) {
                try {
                    await this.$store.dispatch('teams/delEmployee', {
                        _id
                    })
                    window.location.reload()
                }
                catch (e) {
                    console.log(e)
                }

            }
        }
    }
}
</script>

<style lang='scss'>
.team {

    // .team__title
    &__title {}

    // .team__list
    &__list {
        margin-top: 20px;
    }

    // .team__employee
    &__employee {
        display: flex;
        font-size: 20px;
        opacity: 0.7;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    // .team__del
    &__del {
        position: relative;
        margin-left: 12px;
        margin-top: 2px;
        border: none;
        width: 22px;
        height: 22px;
        background: url('@/static/close.svg') 0 0 / 100% 100% no-repeat;
    }



    // .team__add-form
    &__add-form {
        display: flex;
        flex-direction: column;
        width: 250px;
        margin: 100px auto;

        & input {
            padding: 20px;
            height: 50px;
            display: block;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 15px;
        }
    }

    // .team__error
    &__error {
        //padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: rgba(238, 85, 85, 0.8);
        color: #e33;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        margin-bottom: 15px;
    }

    // .team__add-button
    &__add-button {
        height: 50px;
        background-color: #58f;
        color: #fff;
        font-weight: 600;
        border: none;
        border-radius: 5px;
    }

}

// only if user on PC
@media (any-hover:hover) {
    a:hover {
        color: #58f;
    }
}
</style>