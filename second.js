var a = "Hi "
var b = "JavaScript"


if we use '+' with string it will concat
if we use '+' with number it will add

var a = "Hi "
var b = "JavaScript"
undefined
a+b
"Hi JavaScript"
var c = 10
undefined
a+c
"Hi 10"
c+a
"10Hi "
var d = true
undefined
a+d
"Hi true"
a-b
NaN
a-c
NaN
a-d
NaN
a*b
NaN
a/b
NaN
a%b
NaN


string+string = string
number+string = string
string+number = string
number+number=number

1+'1'+'1'
'1'+1+1
1+1+'1'


1+'1'+'1'
"111"
'1'+1+1
"111"
1+1+'1'
"21"


1+'1'+'1'-'1'
'1'+1+1-1

1+'1'+'1'-'1'
110
'1'+1+1-1
110
'1'+1+1-1
110
'a'-'b'
NaN
'2'-'1'
1
'a'-'1'
NaN
'2'*'2'
4
'a'*'2'
NaN

true == 1
false == 0

true+true
true+true
2
true-true
0
true*true
1
10
10
10+true
11
'1'+true
"1true"
'1'+'1'+true
"11true"
'1'+'1'
"11"
'1'-true
0
true-false
1
false-true
-1