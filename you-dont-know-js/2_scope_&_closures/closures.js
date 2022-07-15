//Замыкание — это когда функция умеет запоминать и имеет доступ к лексической области видимости даже тогда, когда
// эта функция выполняется вне своей лексической области видимости.

function foo() {
    var a = 2;

    function bar() {
        console.log( a ); // 2
    }

    bar();
}

foo();