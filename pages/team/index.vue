<template>
    <section>
        <h1>Our Team</h1>

        <ul>
            <li v-for="employee of team" :key="employee.id">
                <a href="#" @click.prevent="openEmployee(employee)">{{ employee.name }}: {{ employee.job }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return{
            team: [
                {id: 0, name: "Святослав", job: "Fullstack Developer"},
                {id: 1, name: "Ренат", job: "Web Disigner"},
            ]
        }
    },
    methods:{
        // Переход на страницу работника по его айди
        openEmployee(employee){
            this.$router.push('/team/' + employee.id)
        }
    }
}
</script>

<style lang='scss'>
ul{
    margin-top: 20px;
}
li{
    font-size: 20px;
    opacity: 0.7;   

    &:not(:last-child){
        margin-bottom: 10px;
    }
}
// only if user on PC
@media (any-hover:hover) {
    a:hover{
        color: #58f;
    }
}

</style>