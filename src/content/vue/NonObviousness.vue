<template>
    <div>
        <h3>Routing: рендеринг children-routes</h3>
        <span>Дата: 12.06.2019</span>
        <article>
            <p>При указании в роутинге потомков (children) обязательно прописывать <code>router-view</code> в родительском элементе, иначе потомки не будут отображаться.</p>
        </article>
        <h3>Routing: работа с корневым компонентом</h3>
        <span>Дата: 12.06.2019</span>
        <article>
            <p>При создании корневого компонента <code>Home.vue</code> его нужно импортировать только 1 раз в файл с роутингом <code>routes.js</code>. Затем, при указании
            пути к корневому элементу <code>path: '/'</code> ссылка на компонент <code>Home.vue</code> будет настраиваться автоматически.</p>
        </article>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
