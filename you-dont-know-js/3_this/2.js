//DONT DO LIKE THIS
//этот подход также является уклонением от фактического понимания this, и полностью зависит от
// области видимости переменной foo.

function foo(num) {
    console.log("foo: " + num);

    // следим, сколько раз вызывается функция
    foo.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// сколько раз `foo` была вызвана?
console.log(foo.count); // 4