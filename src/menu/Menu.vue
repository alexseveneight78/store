<template>
    <div>
    <ul>
      <li v-for="(item, index) in titles" :key="item.id">
        <router-link :to="{ path: item.id }">{{ item.title }} - {{ index = index + 1 }}</router-link>
        <ol>
          <li v-for="it in item.subtitles" :key="it.id">
              <router-link :to="item.id + it.id">{{ it.sub }}</router-link>
          </li>
        </ol>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            titles: [
                { title: 'Javascript', id: '/js', subtitles: [
                    { sub: 'Массивы', id: '/arrays' },
                    { sub: 'Объекты', id: '/objects' },
                    { sub: 'Функции', id: '/functions' }
                ] },
                { title: 'Vue.js', id: '/vue', subtitles: [
                    { sub: 'Заметки', id: '/notes' }
                ] },
                { title: 'cmd', id: '/cmd', subtitles: [
                    { sub: 'GitBash', id: '/git-bash' }
                ] } 
            ]
        }
    }
}
</script>

<style scoped>
    div {
        border-right: 1px dashed black;
        width: 300px;
        height: 100vh;
        padding: 10px;
    }
    ul {
        padding-left: 13px;
    }
    ul>li {
        list-style-type: none;
        margin: 8px 0;
    }
    ul>li > a::before {
        content: '+ '
    }
    ul>li > .router-link-active::before {
        content: '- '
    }
    .router-link-active + ol {
        display: block;
    }
    a + ol {
        outline: 1px solid red;
        display: none;
    }
</style>
