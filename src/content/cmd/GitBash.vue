<template>
    <div>
        <h3>GitBash</h3>
        <h4>Git Bash commands: </h4>
        <ul>
            <li>pwd - вывод директории, в которой мы находимся</li>
            <li>ls - список файлов в данной директории</li>
            <li>cd - навигация по директориям</li>
            <li>git clone https://github.com/alexseveneight78/jewish.git - клонировать репозиторий локально</li>
            <li>ls - вывести список файлов текущей папки в терминале (ls -la)</li>
            <li>git status - статус репо</li>
            <li>git remote -v - на какие ремоуты у нас есть ссылки в локальном репо</li>
            <li>git remote add jsru git@github...- мы хотим проверить, если есть изменения и если есть, то выкачать их из родительского репо</li>
            <li>git pull jsru master - вытяни все изменения ко мне в локальный репо из jsru </li>
            <li>git push origin master - отправить из локального на удалённый репо, откуда был сделан клон; все изменения отправляются </li>
            <li>git -h - все команды гита</li>
        </ul>
        <p><a href="https://githowto.com/">https://githowto.com/</a> - better site as a tutorial for git</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    a {
        color: #fff;
    }
    a:hover {
        color: gray;
    }
</style>
