学习笔记
## 产生式(BNF) 巴科斯诺尔范式 Backus Normal Form
产生式: 在计算机中指Tiger 编译器将源程序经过词法分析(Lexical Analysis)和语法分析(Syntax Analysis)后得到的一系列符合文法规则的语句

是一种用于表达上下文无关的语言，上下文无关文法描述了一类形式语言。它是由约翰 巴科斯
用尖括号括起来的名称来表示语法结构名
语法结构分成基础结构和需要用其他语法结构定义的复合结构
基础结构称终结符
复合结构称非终结符
引号和中间的自负表示终结符
可以有括号
*表示重复多次
|表示或
+表示至少一次


四则运算:
1 + 2 * 3
终结符:
Number
+ - * /
非终结符:
MultiplicativeExpression
AddtiveExpression

<MultiplicativeExpression>::=<Number>|<MultiplicativeExpression>"*"<Number>|
<MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=<MultiplicativeExpression>|
<AddtiveExpression>"+"<MultiplicativeExpression>|
<AddtiveExpression>"-"<MultiplicativeExpression>

<MultiplicativeExpression>::=<Number>|<AddtiveExpression>"+"<Number>|<MultiplicativeExpression>"*"<Number>|
<MultiplicativeExpression>"/"|<Number>|<AddtiveExpression>"+"<Number>

AdditiveExpression:
  MultiplicativeExpression
  AdditiveExpression +
MultiplicativeExpression

形式语言--用途
数据描述语言
  JSON, HTML, XAML, SQL, CSS
编程语言
  C, C++, Java, C#, Python, PHP, JavaScript

形式语言-表达方式
声明式语言
  JSON, HTML, XAML, SQL, CSS
命令式语言
  C, C++, Java, C#, Python, PHP, JavaScript

