<template>
    <div>
        <h3>Hello there! Arrays module is here! </h3>
        <h3>Arrays: forEach метод</h3>
        <span>Дата: 24.05.2019</span>
        <p>Выбор метода массива порой значительно влияет на эффективное решение задачи, поэтому разницу между методами стоит знать.</p> 
        <p>Этот метод — более элегантная замена всем известного цикла for, хотя некоторы обычные вещи с помощью <code>forEach</code> не сделать, к примеру, 
        задачу FizzBuzz методом <code>forEach</code> не решить так просто, как с помощью цикла for.</p>
        <p>Пример цикла <code>for</code>: 
        <pre>
            <code>
            let arr = [1,2,'three', 4, , 6,'el'];
            let container = [];

            for(let i=0; i < arr.length; i++) {
                container.push(arr[i])
            }

            console.log(container)
            // Вывод: (7) [1, 2, "three", 4, undefined, 6, "el"]
            </code>
        </pre>
        </p>
        <p>Пример цикла <code>forEach</code>:</p>
        <pre>
            let arr = [1,2,'three', 4, , 6,'el'];
            let container = [];

            arr.forEach((item) =>{
                container.push(item);
            })

            console.log(container);
            // Вывод: (6) [1, 2, "three", 4, 6, "el"]
        </pre>
        <p>Уже хотя бы здесь заметна разница в цикле: for перебирает все элементы и отображает их, а <code>forEach</code> пропускает те, значение которых не указано (<code>undefined</code>).</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
pre {
    background-color: #fff;
    width: 40%;
    margin: 20px auto;
    padding: 20px 0;
    border-radius: 10px;
}
</style>
