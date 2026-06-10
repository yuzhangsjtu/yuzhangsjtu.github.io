---
title: "MATLAB学习笔记（三） 数据或变量的类型转换与存取 Data structure and File access"
date: 2020-07-31T22:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "一切都是为了MRIO！"
---

### 1数据或变量的类型转换

```matlab
double() 	Convert to double precision
single() 	Convert to single precision
int8() 		Convert to 8-bit signed integer
int16()	 	Convert to 16-bit signed integer
int32() 	Convert to 32-bit signed integer
int64() 	Convert to 64-bit signed integer
uint8() 	Convert to 8-bit unsigned integer
uint16() 	Convert to 16-bit unsigned integer
uint32() 	Convert to 32-bit unsigned integer
uint64() 	Convert to 64-bit unsigned integer
```

例：

```matlab
A = 20
B = int8(20)
B = int8(A)
```

#### 1.1字符 character（char）

```
s1 = 'h'    将字母h指定到s1，注意要家单引号
whos
uint16(s1)  将s1还原成 ASCII码
```

#### 1.2字符串 string

```
s1 = 'Example';
s2 = 'String';
```

字符串可以组合变换：

```matlab
s3 = [s1 s2];	横向组合
s4 = [s1; s2];	纵向组合，此处会显示“要串联的数组的维度不一致”。
```

#### 1.3Logical Operations and Assignments

```
str = 'aardvark';
str(3)	会显示出“r”，即依据字符串的第三个字母索引
'a' == str	结果显示   “1   1   0   0   0   1   0   0”  此处两个等号，为逻辑判断，这里是将字母a与字符串每一序位的字母相比较
```

```matlab
str(str == 'a') = 'Z'	这里，就是将字符串中a字母替换成z，即，一个等号为赋值
```

strcmp（）比较两个字符串是否相同：

```
a = 'asdf'
b='zxcv'
strcmp(a,b)
```

将字符串倒序，以下三种方式皆可：

```
s2 = fliplr(s1)
s2 = reverse(s1)
s2 = s1(end:-1:1)
```

#### 1.4structure

一种存储异构数据的方法，相当于python中的字典？ **结构体数组**？

```matlab
student.name = 'John Doe';
student.id = 'jdo2@sfu.ca';
student.number = 301073268;
student.grade = [100, 75, 73; 95, 91, 85.5; 100, 98, 72];
student

结果不会直接显示分数， 输入 student.grade会全部显示
```

```matlab
student(2).name = 'Ann Lane';
student(2).id = 'aln4@sfu.ca';
student(2).number = 301078853;
student(2).grade = [95 100 90; 95 82 97; 100 85 100];
student(2).grade(3)	找出第二个学生的第三项成绩（注意从上到下、从左到右数）
```

<img src="https://i.loli.net/2020/07/31/9J5mfQDxOjzdKCv.png" style="zoom:50%;" />

```
cell2struct 	Convert cell array to structure array
fieldnames 		Field names of structure, or public fields of object
getfield 		Field of structure array
isfield 		Determine whether input is structure array field
isstruct 		Determine whether input is structure array
orderfields 	Order fields of structure array
rmfield 		Remove fields from structure
setfield 		Assign values to structure array field
struct 			Create structure array
struct2cell 	Convert structure to cell array
structfun 		Apply function to each field of scalar structure
```

```
fieldnames(student)		列出数据组有哪些类
rmfield(student,'id')	删除id这一类
```

#### 1.5Nesting Structures嵌套结构

```
A = struct('data', [3 4 7; 8 0 1], 'nest', struct('testnum', 'Test 1', 'xdata', [4 2 8],'ydata', [7 1 6]));
A(2).data = [9 3 2; 7 6 5];
A(2).nest.testnum = 'Test 2';
A(2).nest.xdata = [3 4 2];
A(2).nest.ydata = [5 0 9];
A.nest
```

#### 1.6cell array单元数组

分块指定

```matlab
A(1,1)={[1 4 3; 0 5 8; 7 2 9]};
A(1,2)={'Anne Smith'};
A(2,1)={3+7i};
A(2,2)={-pi:pi:pi};
A
或
A{1,1}=[1 4 3; 0 5 8; 7 2 9];
A{1,2}='Anne Smith';
A{2,1}=3+7i;
A{2,2}=-pi:pi:pi;
A
```

执行结果如下：

<img src="https://i.loli.net/2020/07/31/mTOUBIWH1CF2Dw9.png" style="zoom:50%;" />

读取时需要使用大括号：

```matlab
A{1,1}
A{1,1}(3)
```

cell array functions:

```
cell 		Create cell array
cell2mat 	Convert cell array to numeric array
cell2struct Convert cell array to structure array
celldisp 	Cell array contents
cellfun 	Apply function to each cell in cell array
cellplot 	Graphically display structure of cell array
cellstr 	Create cell array of strings from character array
iscell 		Determine whether input is cell array
mat2cell 	Convert array to cell array with different sized cells
num2cell 	Convert array to cell array with consistently sized cells
struct2cell Convert structure to cell array
```

matrix与cell的转换：

```
a = magic(3)	magic表示魔法矩阵，每行每列以及对角线之和相等
b = num2cell(a)
c = mat2cell(a, [1 1 1], 3)  3表示将三个column放一起
```

#### 1.7Multidimensional Array多维数组

```
A{1,1,1} = [1 2;4 5];
A{1,2,1} = 'Name';
A{2,1,1} = 2-4i;
A{2,1,1} = 7;
A{1,1,2} = 'Name2';
A{1,2,2} = 3;
A{2,1,2} = 0:1:3;
A{2,2,2} = [4 5]';
```

<img src="https://i.loli.net/2020/07/31/eg9IZTMObGqypAi.png" style="zoom: 50%;" />![](https://i.loli.net/2020/07/31/IxUscMYaPDVjZCy.png)

<img src="https://i.loli.net/2020/07/31/IxUscMYaPDVjZCy.png" style="zoom:50%;" />

也可以用cat命令：

```
A=[1 2;3 4]; B=[5 6;7 8];
C=cat(1,A,B) 	1为纵向合并，即row
C=cat(2,A,B) 	2为横向合并，即column
C=cat(3,A,B)	3为高维合并，即layer
```

如图所示：

<img src="https://i.loli.net/2020/07/31/5dqNHgJxoSzIm4w.png" style="zoom:80%;" />

```matlab
A{1,1} = [1 2;4 5];
A{1,2} = 'Name';
A{2,1} = 2-4i;
A{2,2} = 7;
B{1,1} = 'Name2';
B{1,2} = 3;
B{2,1} = 0:1:3;
B{2,2} = [4 5]';
C = cat(3, A, B)
```

**reshape**

Returns a new array with assigned rows and columns

```
A = {'James Bond', [1 2;3 4;5 6]; pi, magic(5)}
C = reshape(A,1,4)   将2x2矩阵转成1x4矩阵
```

#### 1.8Checking Variable And Variable Status检查变量类型

```
isinteger 		Determine if input is integer array
islogical 		Determine if input is logical array
isnan 			Detect an element that isnot a number (NaN)
isnumeric 		Determine if input is numeric array
isprime 		Detect prime elements of array
isreal 			Determine if all array elements are real numbers
iscell 			Determine if input is cell array
ischar 			Determine if input is character array
isempty 		Determine if input is empty array
isequal 		Determine if arrays are numerically equal
isfloat 		Determine if input is floating-point array
isglobal 		Determine if input is global variable
ishandle 		Detect valid graphics object handles
isinf 			Detect infinite elements of array
```

### 2File access

#### 2.1save

```matlab
clear; a = magic(4);
save mydata1.mat
save mydata2.mat -ascii   存成ASCII可以用记事本打开

save(filename,'var')		可以存储特定变量，当然也可以鼠标右键另存为
```

#### 2.2load

```
load('mydata1.mat')
load('mydata2.mat','-ascii')
```

#### 2.3xlsread()

```matlab
Score = xlsread('04Score.xlsx')					默认读数值部分
Score = xlsread('04Score.xlsx', 'B2:D4')		指定行列
```

#### 2.4xlswrite()

```matlab
M = mean(Score')';
xlswrite('04Score.xlsx', M, 1, 'E2:E4');   顺序分别是文件名、变量名、sheet、写入的位置
xlswrite('04Score.xlsx', {'Mean'}, 1, 'E1');  将单元E1写成mean
```

#### 2.5获取文本

```matlab
[Score Header] = xlsread('04Score.xlsx')
```

#### 2.6Low-level File I/O Functions

```
fopen 		Open file, or obtain information about open files
fclose 		Close one or all open files
fscanf 		Read data from text file
fprintf 	Write data to text file
feof 		Test for end-of-file
```

```matlab
fid = fopen('[filename]', '[permission]');
```

Writing Sine Values into A File:

```matlab
x = 0:pi/10:pi; y = sin(x); fid = fopen('sinx.txt','w');
for i=1:11
fprintf(fid,'%5.3f %8.4f\n', x(i), y(i));
end
fclose(fid); type sinx.txt
```

<img src="https://i.loli.net/2020/07/31/47Ss52jHwhLTvdx.png" style="zoom:80%;" />

<img src="https://i.loli.net/2020/07/31/TsHG25o6trUfNSX.png" style="zoom:80%;" />![](https://i.loli.net/2020/07/31/KtYH9DGyhEMNQB3.png)
