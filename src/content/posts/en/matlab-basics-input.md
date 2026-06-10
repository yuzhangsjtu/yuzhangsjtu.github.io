---
title: "MATLAB Study Notes (1) Basic Input"
date: 2020-07-27T22:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "Everything is for MRIO!"
---

### 1. Assignment

#### 1.1 Basics

In MATLAB, you can assign values in a way similar to Python, without declaration, e.g.:

```
A=10 assigns 10 to A
```

Note: Variable names are case‑sensitive; a variable must start with a letter, not a digit (e.g., 2A is invalid).

#### 1.2 Data Types

The default type is double‑precision.

Commands: `who` (lists existing variables) and `whos` (lists existing variables along with their data types)

#### 1.3 MATLAB Keywords

```
ans
i,j: complex number
Inf: ∞
eps: 2.2204e-016   very small number
NaN: not a number
pi: π
```

To list keywords:
```
iskeyword
```

Generally, you are not allowed to assign a value to a keyword – don’t use a keyword as a variable name.

Example of inappropriate assignment:

```
cos='This string.';
cos(8)
```

This outputs the 8th character of “This string” (space is counted).

`clear cos` can remove the variable cos.

MATLAB variable calling priority is as follows:

<img src="https://i.loli.net/2020/07/26/DmCEwXe3icxt5J6.png" style="zoom:50%;" />

#### 1.4 Changing Display Format: `format`

![](https://i.loli.net/2020/07/26/iTd9sRFmQwLnYKW.png)

```
pi
3.1416

format long
3.141592653589793
```

#### 1.5 Some Short Commands

```
; add a semicolon after a command to suppress the display of the result
↑: shows the previous command, ↓ does the opposite
clc: clears the Command Window
clear: clears the Workspace
who: variables in the Workspace
whos: variable information of the Workspace
```

### 2. Array: Entering a Matrix or Vector

#### 2.1 Vector Input

Row vector:

```
a = [1 2 3 4]
```

Column vector:

```
b = [1; 2; 3; 4]
```

```
Try a*b and b*a
```

#### 2.2 Matrix Input: semicolon

```
A = [1 2 3; 4 5 6; 7 8 9]
```

Indexing a specific element in a matrix or vector: variable + parentheses, A(5)

**Column‑major indexing**

Method one: A(row, column) – specifying the row and column numbers, e.g., A(3,2) yields 8

Method two: column‑major indexing: A(8) – counting from top to bottom, then left to right, it retrieves the eighth number

```
A(8)
A([1 3 5])
A([1 3; 1 4])   first row: 1st and 3rd elements, second row: 1st and 4th elements
A(3,2)   the 3rd‑row, 2nd‑column element
A([1 3], [1 3])   uses intersection – former is row, latter is column – the intersection of rows {1,3} and columns {1,3}
```

The above methods can also be used to assign (replace) values of elements in an already created matrix.

![](https://i.loli.net/2020/07/27/fOmonwGxeLu5qJt.png)

<img src="https://i.loli.net/2020/07/27/BDEmqih8klGrNgO.png" style="zoom: 33%;" />

Neat use of intersections:

```
A([1 2], [1 2 3])
```

You can also do this:

```
A(3,:)   means the third row
A(3,:) = []   deletes the third row
```

The same approach can be used to add or delete columns!

#### 2.3 Colon Operator

```
a = [1:100]   creates a row vector a containing 1‑100, with a step of 1
a = [1:2:99]  creates the odd numbers from 1 through 99 – starting at 1 with a step of 2, forming an arithmetic progression
```

Syntax:

```
j:k → [j, j+1, j+2,..., j+m]
j:i:k → [j, j+i, j+2i, ..., j+m*i]
```

They can also be mixed:

```
B = [1:5; 2:3:15; -2:0.5:0]
```

<img src="https://i.loli.net/2020/07/27/LOKIDqa7npTFieU.png" style="zoom: 50%;" />

You can also produce strings with a regular pattern:

```
a = 'a':2:'z'
```

#### 2.4 Augmenting and Trimming Matrices

```
A=[1 2; 3 4]
B=[9 9; 9 9]
F=[A B]  horizontal concatenation  
F=[A;B]  vertical concatenation
```

#### 2.5 Matrix Operations

![](https://i.loli.net/2020/07/27/Iedi3gjKkorzpE1.png)

![](https://i.loli.net/2020/07/27/NRqZtJEPLY5HuDs.png)

Note:  
‑ The dot operator `.` performs element‑wise multiplication at corresponding positions.  
‑ `'` is the transpose operator.

```
.  element‑wise multiplication
'  transpose
```

#### 2.6 Special Matrices

```
linspace(): linearly spaced vectors
eye(n): n‑by‑n identity matrix
zeros(n1,n2): n1‑by‑n2 zero matrix
ones(n1,n2): n1‑by‑n2 matrix with every entry equal to 1
diag(): diagonal matrix
rand(): uniformly distributed random numbers
```

linspace(1, 2, 6)  → outputs 6 equally spaced numbers between 1 and 2 (here spacing is 0.2)

diag([2 3 4]) → creates a diagonal matrix with diagonal entries 2, 3, 4

#### 2.7 Matrix Functions

For example:
$$
\begin{equation}   % begin math environment
\left[   % left bracket
  \begin{array}{ccc}   % this matrix has 3 columns, each centered
    1 & 2 & 3\\  % first row
    4 & 5 & 6\\  % second row
    7 & 8 & 9\\  % third row
  \end{array}
\right]   % right bracket
\end{equation}
$$

```
max(A)   takes the maximum of each column
sort(A)  sorts each column of A by magnitude
max(max((A)))  finds the maximum of all elements
sortrows(A)   by default, sorts rows in ascending order based on the first column; if values there are equal, compares subsequent columns to the right
min(A)
size(A)  returns the number of rows and columns of the matrix
sum(A)   sums each column
length(A) 
mean(A)   returns the average of each column
find(A)   e.g.: find(A==5)   finds the positions (in column‑major order) where the element equals 5 – counting top‑to‑bottom, left‑to‑right
```

![](https://i.loli.net/2020/07/27/nWeo98gz4OhYAPC.png)
