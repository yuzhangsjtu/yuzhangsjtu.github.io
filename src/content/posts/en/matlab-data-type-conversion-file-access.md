---
title: "MATLAB Study Notes (3): Data Type Conversion and File Access (Data structure and File access)"
date: 2020-07-31T22:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "Everything is for MRIO!"
---

### 1 Type Conversion of Data or Variables

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

Example:

```matlab
A = 20
B = int8(20)
B = int8(A)
```

#### 1.1 Character (char)

```
s1 = 'h'    Assign the letter h to s1; note that single quotes must be added
whos
uint16(s1)  Convert s1 back to its ASCII code
```

#### 1.2 String

```
s1 = 'Example';
s2 = 'String';
```

Strings can be combined and transformed:

```matlab
s3 = [s1 s2];	Horizontal concatenation
s4 = [s1; s2];	Vertical concatenation; this displays "Dimensions of arrays being concatenated are not consistent."
```

#### 1.3 Logical Operations and Assignments

```
str = 'aardvark';
str(3)	Displays "r", i.e., indexing the third letter of the string
'a' == str	The result shows   "1   1   0   0   0   1   0   0"  Here the two equal signs are a logical comparison, comparing the letter a with the letter at each position of the string
```

```matlab
str(str == 'a') = 'Z'	Here, the letter a in the string is replaced with Z; that is, a single equal sign means assignment
```

strcmp() compares whether two strings are identical:

```
a = 'asdf'
b='zxcv'
strcmp(a,b)
```

Reverse a string; any of the following three methods works:

```
s2 = fliplr(s1)
s2 = reverse(s1)
s2 = s1(end:-1:1)
```

#### 1.4 structure

A method for storing heterogeneous data, equivalent to a dictionary in Python? **Structure array**?

```matlab
student.name = 'John Doe';
student.id = 'jdo2@sfu.ca';
student.number = 301073268;
student.grade = [100, 75, 73; 95, 91, 85.5; 100, 98, 72];
student

The result does not directly display the grades; entering student.grade displays them all
```

```matlab
student(2).name = 'Ann Lane';
student(2).id = 'aln4@sfu.ca';
student(2).number = 301078853;
student(2).grade = [95 100 90; 95 82 97; 100 85 100];
student(2).grade(3)	Find the third grade of the second student (note: count from top to bottom, left to right)
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
fieldnames(student)		List which fields the data array has
rmfield(student,'id')	Delete the id field
```

#### 1.5 Nesting Structures

```
A = struct('data', [3 4 7; 8 0 1], 'nest', struct('testnum', 'Test 1', 'xdata', [4 2 8],'ydata', [7 1 6]));
A(2).data = [9 3 2; 7 6 5];
A(2).nest.testnum = 'Test 2';
A(2).nest.xdata = [3 4 2];
A(2).nest.ydata = [5 0 9];
A.nest
```

#### 1.6 cell array

Assign content block by block

```matlab
A(1,1)={[1 4 3; 0 5 8; 7 2 9]};
A(1,2)={'Anne Smith'};
A(2,1)={3+7i};
A(2,2)={-pi:pi:pi};
A
or
A{1,1}=[1 4 3; 0 5 8; 7 2 9];
A{1,2}='Anne Smith';
A{2,1}=3+7i;
A{2,2}=-pi:pi:pi;
A
```

The execution result is as follows:

<img src="https://i.loli.net/2020/07/31/mTOUBIWH1CF2Dw9.png" style="zoom:50%;" />

Curly braces must be used when reading:

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

Converting between matrix and cell:

```
a = magic(3)	magic means a magic matrix, where the sums of each row, each column, and the diagonals are equal
b = num2cell(a)
c = mat2cell(a, [1 1 1], 3)  3 means putting the three columns together
```

#### 1.7 Multidimensional Array

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

You can also use the cat command:

```
A=[1 2;3 4]; B=[5 6;7 8];
C=cat(1,A,B) 	1 means vertical concatenation, i.e., row
C=cat(2,A,B) 	2 means horizontal concatenation, i.e., column
C=cat(3,A,B)	3 means higher-dimensional concatenation, i.e., layer
```

As shown in the figure:

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
C = reshape(A,1,4)   Convert the 2x2 matrix into a 1x4 matrix
```

#### 1.8 Checking Variable And Variable Status

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

### 2 File access

#### 2.1 save

```matlab
clear; a = magic(4);
save mydata1.mat
save mydata2.mat -ascii   Saved as ASCII, the file can be opened with Notepad

save(filename,'var')		Can save specific variables; of course, you can also right-click and Save As
```

#### 2.2 load

```
load('mydata1.mat')
load('mydata2.mat','-ascii')
```

#### 2.3 xlsread()

```matlab
Score = xlsread('04Score.xlsx')					Reads the numeric part by default
Score = xlsread('04Score.xlsx', 'B2:D4')		Specify rows and columns
```

#### 2.4 xlswrite()

```matlab
M = mean(Score')';
xlswrite('04Score.xlsx', M, 1, 'E2:E4');   The order is file name, variable name, sheet, and write location
xlswrite('04Score.xlsx', {'Mean'}, 1, 'E1');  Write cell E1 as mean
```

#### 2.5 Reading Text

```matlab
[Score Header] = xlsread('04Score.xlsx')
```

#### 2.6 Low-level File I/O Functions

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
