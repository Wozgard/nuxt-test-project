<template>
    <section>
        <h1>{{ team[id].name }}</h1>
        <h3>{{ team[id].username }}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos quae perferendis, ipsam voluptas veniam ullam tenetur aut commodi molestias, assumenda expedita similique aspernatur facilis ducimus. Fuga excepturi sunt similique nisi. Expedita, tempore nobis! Saepe debitis sapiente enim quis porro inventore aliquid officiis velit? Corporis dolores amet at itaque facilis iste asperiores nulla voluptate! Porro nostrum iure quaerat sint quas culpa officia, tenetur at assumenda voluptatum nemo odio earum debitis exercitationem ad eius omnis? Commodi ratione eaque at aliquam, laudantium ullam? Officiis inventore tempore quisquam atque quod illum. Architecto provident ipsam iure, adipisci fugiat doloribus quisquam rerum nisi commodi, veniam nemo dignissimos aliquam perferendis. Incidunt sequi odit facere alias, iste quasi atque, ut obcaecati magnam sed quaerat velit deleniti nam? Facilis quidem cupiditate corrupti ipsum beatae animi id sint numquam laudantium fugit rem odit vel ea nostrum omnis consequatur hic sequi nobis rerum molestias dignissimos dolore inventore, quia porro! Autem, laborum!</p>
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
    data() {
        return {
            id: this.$route.params.id - 1
        }
    },
    computed: {
        team() {
            //console.log(this.$store.getters['teams/team'])
            return this.$store.getters['teams/team']
        }
    },
    validate({ params }) {
        return /^\d+$/.test(params.id)
    }
}

</script>

<style>
h1 {
    margin-left: -3px;
}

h3 {
    font-size: 18px;
    opacity: 0.7;
}

p {
    display: block;
    width: 700px;
    font-size: 16px;
}
</style>