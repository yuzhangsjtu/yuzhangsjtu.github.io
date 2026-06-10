---
title: "MATLAB学习笔记（六） MATLAB中的简单for循环"
date: 2020-09-14T11:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "一切都是为了MRIO！近日取得了一些进展，预期可以构建模型。"
---

### 1 简单for循环

例：输出1-100的和

```matlab
sum = 0;
for i = 1:100
	sum = sum + i;
	end
sum
```

解释：i从1到100，每次增加一个，该共循环100次
注意：分号的位置；不能使用“+=”符号；每写一层循环，必须以end结尾

### 2 带有步长的for循环

例：输出1-10之间的奇数和

```matlab
sum = 0;
for i = 1:2:10
	sum = sum + i;
end
sum
```

解释：i = 1:2:10中间的2表示步长，表示从1到10，每次增加2，即1，3，5，7，9五个数之和；步长也可以为负数

### 3 对向量和矩阵的遍历

#### 3.1 对向量的遍历

```matlab
A = rand(1,4);
for i = A
	i
end
```

解释：rand函数用于随机生成0~1之间的数，rand(1,4)生成1*4的列向量。

####  3.2 对矩阵的遍历

```matlab
A = magic(4);
A
for i = A;
	i
end
```

解释：magic(n)函数用于生成任意一行或一列或主副对角线之和相等的方阵，对矩阵的循环遍历是依次取出矩阵中的每一列元素

### 4 break和continue的使用

break用于终止离它最近的一层for循环

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

continue用于跳过离它最近的一层for循环，接着执行下一次循环

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

此时i=4的情形被跳过了

### 5 多层for循环

```matlab
for i = 1:2:6
	for j = 1:3
		y = i * j
	end
end
```

for循环可以按照需要进行嵌套



文章来源：

https://blog.csdn.net/denglavender/article/details/102649093?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param
