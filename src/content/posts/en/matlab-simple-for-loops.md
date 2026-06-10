---
title: "MATLAB Study Notes (6) — Simple For Loops in MATLAB"
date: 2020-09-14T11:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "Everything is for MRIO! Recent progress has been made, and a model is expected to be built."
---

### 1 Simple for loop

Example: output the sum from 1 to 100

```matlab
sum = 0;
for i = 1:100
	sum = sum + i;
	end
sum
```

Explanation: i goes from 1 to 100, increasing by 1 each time, looping a total of 100 times.  
Note: the position of semicolons; the “+=” operator cannot be used; every layer of a loop must end with `end`.

### 2 For loop with a step size

Example: output the sum of odd numbers between 1 and 10

```matlab
sum = 0;
for i = 1:2:10
	sum = sum + i;
end
sum
```

Explanation: the 2 in the middle of `i = 1:2:10` indicates the step size, meaning from 1 to 10, i increases by 2 each time, i.e., the sum of five numbers: 1, 3, 5, 7, 9. The step size can also be negative.

### 3 Iterating over vectors and matrices

#### 3.1 Iterating over a vector

```matlab
A = rand(1,4);
for i = A
	i
end
```

Explanation: the `rand` function is used to randomly generate numbers between 0 and 1; `rand(1,4)` generates a 1×4 column vector.

#### 3.2 Iterating over a matrix

```matlab
A = magic(4);
A
for i = A;
	i
end
```

Explanation: the `magic(n)` function generates an n×n square matrix where every row, column, and main/anti-diagonal sums to the same value. The loop over a matrix takes each column of elements one by one.

### 4 Using break and continue

`break` is used to terminate the innermost for loop that contains it.

```matlab
x = 1;
for i = 1:2:10
	if i > 7
		break
	else
		x = x * i
	end
end
```

`continue` is used to skip the rest of the current iteration of the innermost for loop that contains it and proceed to the next iteration.

```matlab
sum = 0;
for i = 1:6
	if i == 4
		continue
	else
		sum = sum + i
	end
end
```

Here, the case when i=4 is skipped.

### 5 Nested for loops

```matlab
for i = 1:2:6
	for j = 1:3
		y = i * j
	end
end
```

For loops can be nested as needed.

---

Source:

https://blog.csdn.net/denglavender/article/details/102649093?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param
