---
title: "MATLAB学习笔记（一） 基础输入"
date: 2020-07-27T22:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "一切都是为了MRIO！"
---

### 1.赋值

#### 1.1基础

matlab中，可以用类似于python中的方法赋值，不需要宣告，如：

```
A=10 将10赋值给A
```

Note：赋值时，代数区分大小写；变量只能以字母开头，不能以数字开头（如2A）

#### 1.2数据类型

默认是双精度（double）

命令：who（输出已有变量） 和 whos（输出已有变量及数据类型）

#### 1.3MATLAB关键字

```
ans
i,j: complex number
Inf: ∞
eps: 2.2204e-016   极小数
NaN: not a number
pi: π
```

To list keywords：
```
iskeyword
```

一般不允许关键词被赋值，不要将keyword赋值成变量

不当赋值举例：

```
cos='This string.';
cos(8)
```

输出的是“This string”的第八个字符（计入空格）

clear cos 可以清除cos这个var

MATLAB变量优先级如下：  Calling priority

<img src="https://i.loli.net/2020/07/26/DmCEwXe3icxt5J6.png" style="zoom:50%;" />

#### 1.4更改显示格式 format

![](https://i.loli.net/2020/07/26/iTd9sRFmQwLnYKW.png)

```
pi
3.1416

format long
3.141592653589793
```

#### 1.5一些小命令

```
; 命令的结果后面加分号，不显示运算结果
↑:展示上一条命令，同理↓
clc: 清空命令窗口
clear: 清空workspace（工作区）
who: variables in the workspace
whos: variable information of the workspace
```

### 2.Array：输入矩阵matrix或向量vector

#### 2.1向量输入

横向量row：

```
a = [1 2 3 4]
```

列向量column：

```
b = [1; 2; 3; 4]
```

```
试试看a*b 与 b*a
```

#### 2.2矩阵输入 semicolon 分号

```
A = [1 2 3; 4 5 6; 7 8 9]
```

index 索引出矩阵或向量中特定位置的数：变量+括号，A(5)

**列为主向量**

方法一： A（row, column） 即指定行数、列数，如A(3,2)，输出8

方法二：列为主向量：A（8），从上到下，从左到右数第八个数

```
A(8)
A([1 3 5])
A([1 3; 1 4]) 第一行为第1、3个数，第二行为第1、4个数
A(3,2)  第三行第二个数
A([1 3], [1 3])   取交集，前为row，后为column，一三行与一三列的交集
```

可以用上面的方法给已生成的矩阵中的元素赋值（替换数值）

![](https://i.loli.net/2020/07/27/fOmonwGxeLu5qJt.png)

<img src="https://i.loli.net/2020/07/27/BDEmqih8klGrNgO.png" style="zoom: 33%;" />

妙用交集：

```
A([1 2], [1 2 3])
```

也可以：

```
A(3,:)  表示第三行
A(3,:) = []  将第三行删去
```

同理，可以用此法增删列！

#### 2.3Colon Operator

```
a = [1:100]   输入a为1-100的行向量,其实就是差距为1
a = [1:2:99]  输入1-99之间的奇数，第一个数为一，间隔为2的等差数列
```

语法如下：

```
j:k → [j, j+1, j+2,..., j+m]
j:i:k → [j, j+i, j+2i, ..., j+m*i]
```

也可以混用：

```
B = [1:5; 2:3:15; -2:0.5:0]
```

<img src="https://i.loli.net/2020/07/27/LOKIDqa7npTFieU.png" style="zoom: 50%;" />

也可以输出有规律的字符串：

```
a = 'a':2:'z'
```

#### 2.4矩阵增减

```
A=[1 2; 3 4]
B=[9 9; 9 9]
F=[A B]  横向相加  
F=[A;B]  纵向相接
```

#### 2.5矩阵运算

![](https://i.loli.net/2020/07/27/Iedi3gjKkorzpE1.png)

![](https://i.loli.net/2020/07/27/NRqZtJEPLY5HuDs.png)

注：点乘  . 对应位置相乘;  '为转置

```
. 点乘
' 转置
```

#### 2.6特殊矩阵

```
linspace(): linear spaced vectors
eye(n): n*n identity matrix  单位矩阵
zeros(n1,n2): n1*n2 zero matrix
ones(n1,n2): n1*n2 matrix with every entry as 1
diag(): diagonal matrix 对角矩阵
rand(): uniformly distributed random numbers
```

linspace(1, 2, 6)  →输出1-2之间的6个等间距矩阵（此处间距为0.2）

diag([2 3 4]) →输出对角线为2 3 4的对角矩阵

#### 2.7Matrix Function

如：
$$
\begin{equation}       %开始数学环境
\left[                 %左括号
  \begin{array}{ccc}   %该矩阵一共3列，每一列都居中放置
    1 & 2 & 3\\  %第一行元素
    4 & 5 & 6\\  %第二行元素
    7 & 8 & 9\\  %第三行元素
  \end{array}
\right]                 %右括号
\end{equation}
$$

```
max(A)  取每一列的最大值
sort(A) 将A中的每一列元素按大小排序
max(max((A)) 取所有元素的最大值
sortrows(A)  默认依据第一列的数值按升序移动每一行，如果第一列的数值有相同的，依次往右比较
min(A)
size(A) 输出矩阵的行数与列数
sum(A)  将每一列加总
length(A) 
mean(A)  输出每一列的平均值
find(A)  如： find(A==5)  找到矩阵中的第几个位置为5，从上到下，从左到右
```

![](https://i.loli.net/2020/07/27/nWeo98gz4OhYAPC.png)
