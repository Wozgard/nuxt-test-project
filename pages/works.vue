<template>
    <section class="works">
        <h1 class="works__title">Our works</h1>
        <div class="works__box">
            <article class="works__project">
                <img class="works__image" src="@/static/serega.jpg" alt="#">
                <p class="works__discription">It's our first work. We made it for our best friend, photographer Sergey</p>
            </article>
            <article class="works__project">
                <img class="works__image" src="@/static/serega.jpg" alt="#">
                <p class="works__discription">It's our first work. We made it for our best friend, photographer Sergey</p>
            </article>
            <article class="works__project">
                <img class="works__image" src="@/static/serega.jpg" alt="#">
                <p class="works__discription">It's our first work. We made it for our best friend, photographer Sergey</p>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
.works {

    // .works__title
    &__title {}

    // .works__box
    &__box {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0;
    }

    // .works__project
    &__project {
        flex: 0 0 auto;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 5px #ccc;

        &:not(:last-child) {
            margin: 0 30px 50px 0;
        }
    }

    // .works__image
    &__image {
        width: 600px;
    }

    // .works__discription
    &__discription {
        display: block;
        margin-top: 20px;
        margin-bottom: 10px;
        opacity: 0.8;
        font-size: 16px;
    }
}
</style>