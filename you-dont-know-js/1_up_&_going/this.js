var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

function foo() {
    return this.bar;
}



//--------

// console.log(foo());		    // "global" not working in node
console.log(obj1.foo());		// "obj1"
console.log(foo.call( obj2 ));	// "obj2"
console.log(new foo());			// undefined - foo {}