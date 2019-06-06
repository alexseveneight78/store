<template>
    <div>
        <h3>JS component</h3>
        <h3>forEach метод</h3>
        <span>Дата: 24.05.2019</span>
        <p>Выбор метода массива порой значительно влияет на эффективное решение задачи, поэтому разницу между методами стоит знать.</p> 
        <p>Этот метод — более элегантная замена всем известного цикла for, хотя некоторы обычные вещи с помощью <code>forEach</code> не сделать, к примеру, 
            задачу FizzBuzz методом <code>forEach</code> не решить так просто, как с помощью цикла for.</p>
        <p>Пример цикла <code>for</code>: </p>
    <slot-content></slot-content>
    </div>
</template>

<script>
import Slotcontent from '../content/Slotcontent.vue';
export default {
    components: {
        'slotcontent': Slotcontent
    }
}
</script>

<style scoped>
    div {
        background-color: #ffffb3;
        width: 100%;
        padding: 25px 50px 0 25px;
    }
</style>
