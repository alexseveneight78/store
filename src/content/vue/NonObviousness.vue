<template>
    <div>
        <content-slot>
            <h3>Routing: рендеринг children-routes</h3>
            <span>Дата: 12.06.2019</span>
            <article>
                <p>При указании в роутинге потомков (children) обязательно прописывать <code>router-view</code> в родительском элементе, иначе потомки не будут отображаться.</p>
            </article>
        </content-slot>
        <content-slot>
            <h3>Routing: работа с корневым компонентом</h3>
            <span>Дата: 12.06.2019</span>
            <article>
                <p>При создании корневого компонента <code>Home.vue</code> его нужно импортировать только 1 раз в файл с роутингом <code>routes.js</code>. Затем, при указании
                пути к корневому элементу <code>path: '/'</code> ссылка на компонент <code>Home.vue</code> будет настраиваться автоматически.</p>
            </article>
        </content-slot>
        <content-slot>
            <h3>Class: связывание класса при отработке условия</h3>
            <article>
                Манипуляции через css-классы осуществляется при биндинге класса в теле тэга: 
                <pre>
                    <code>
                        <tr :class="{ bg: isActive }">
                        <td><input type="number" v-model.number="number"></td>
                        <td> total: {{ calc = calc % 2 === 0 ? calc : { bg: !isActive } }}</td>
                        </tr>
                    </code>
                </pre>
                <p>А в эксземпляре Vue указывается следующее: </p>
                <pre>
                    <code>
                    new Vue({
                        el: "#app",
                        data: {
                                    number: 0,
                            isActive: false
                        },
                        computed: {
                            calc(){
                                return this.number;
                            }
                        }
                    })
                    </code>
                </pre>
            </article>
        </content-slot>
        <content-slot>
            <h3>Watch: именование функции в связке с data</h3>
            <article>
                Функция-watcher должна иметь такое же имя, как и свойство из data, за которым устанавливается слежение. 
            </article>
        </content-slot>
    </div>
</template>

<script>
import ContentSlotVue from './slots/ContentSlot.vue';
export default {
    components: {
        'content-slot': ContentSlotVue
    }
    
}
</script>

<style scoped>
    pre {
        background-color: #fff;
    }
</style>
