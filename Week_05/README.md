## Week 05. 学习笔记 - Yun

#### Atom

#### Expressions

##### Member

a.b

a[b]

foo `string`

super.b

super['b']

new.target

new Foo()

##### New

new Foo

括号可以省略，想想也有很多麻烦



#### Reference

Object

Key 

可以是string，也可以是symbol

delete

assign



### Expressions

Call

​	foo()

​	super()

​	foo()['b']

​	foo().b

​	foo()`abc`



Unary

​	delete a.b

​	void foo()

​	typeof a



Unboxing

拆箱转换

是指把一个Object 转换成普通类型的操作

To Premitive

toString() vs valueOf()

Symbol.toPrimitive



```javascript
var x = {}

x[o] = 1

console.log("x" + o)

let o = {

	toString() { return "2" },

	valueOf() { return 1 },

	[Symbol.toPrimitive]() { return 3 }

}
```



Boxing

装箱转换



Number new Number(1) 1

String new String("a") "a"



Symbol无法被new调用

所以出现了new Object(Symbol("a"))这样的语法



简单语句

Expression Statement

Empty Statement

Debugger Statement

Throw Statement

Continue Statement

Break Statement

Return Stateme





