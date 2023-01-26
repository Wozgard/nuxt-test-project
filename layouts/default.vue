<template>
    <div class="wrapper">
        <navBar />
        <main class="main">
            <div class="main__container _container">
                <nuxt v-bind:team="team"/>
            </div>
        </main>
        <fooTer />
    </div>
</template>
  
<script>
import navBar from '~/components/navBar/navBar.vue';
import fooTer from '~/components/footer/footer.vue';
export default {
    components: {
        navBar,
        fooTer
    }
}
</script>


<style>
@import url('@/components/scss/null.scss');
._container {
    max-width: 1380px;
    padding: 0 15px;
    margin: 0 auto;
 }
 .wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
 }
 .main{
    margin-top: 20px;
    flex: 1 1 auto;
 }
</style>