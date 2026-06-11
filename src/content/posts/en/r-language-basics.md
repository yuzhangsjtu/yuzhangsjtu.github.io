---
title: "R Language Basics"
date: 2021-05-29T10:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["R Language"]
summary: "From getting started to..."
---

R has many applications in statistics, econometrics, and scientific visualization, and is a powerful tool for research.

To advance my understanding of the literature, and to get started with a powerful tool, I am learning R.

Since it is used mainly as a tool and does not involve "programming," this section only excerpts the relevant basics for easy reference.

The setup is: R 4.0.2 + RStudio

### 1. First Look at RStudio

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205237.png"  />

#### 1.1 Zone A

This zone is mainly responsible for writing code. When you have just installed RStudio and start it up, you may not see this Zone A.

Instead, Zone B occupies all of Zone A's space. You can click **File** → **New File** → **R Script** in the top-left corner, and it will appear. If you have opened an R script before, reopening RStudio will bring up the previously opened R script.

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205619.png" style="zoom:50%;" />

The steps above will create a new R code file named "Untitled1" (the extension defaults to `.R`). You can write code in the file, then press the shortcut `Ctrl + S` to save it. You can also click **File** → **Save** in the top-left to save. Then a "Save File" dialog will pop up, and you can rename the "Untitled1" file. Here we rename it to "test," then click "Save" to save the file. The file will be saved under the working path where you want to save it. Then a "Save File" dialog will pop up, and you can rename the "Untitled1" file. Here we rename it to "test," then click "Save" to save the file. The file will be saved under the current working path.

#### 1.2 Zone B

This is where code is executed, and the execution results are displayed here as well. When you enter code in Zone A, every line that runs is shown here. You can also enter code directly in this zone, then press Enter to execute the code and output the result. Entering and executing code directly in this zone is much the same as the RGUI interface, so we will not introduce RGUI.

For code entered in Zone A, you can click Run to run the line of code where the cursor is located — one click runs one line — or you can run it with **Ctrl + Enter**. The code that runs will be displayed in Zone B, and if there is an error in the code, a corresponding error message will appear. As code runs, Zone B will accumulate more and more content; you can clear it with the broom button. To clear the content in the Console, you can also press the **Ctrl + L** shortcut or enter cat('\f') in the Console.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205851.png)

#### 1.3 Zone C

 **Environment**: Used to record the values of the current variables, making it convenient to check their status.

 **History**: A history of all the code executed in the **Console** area.

 **Connections**: Used to conveniently connect to external databases. It is rarely used, so we will not introduce it for now.

#### 1.4 Zone D

Files, Plots, Packages, Help, Viewer

**Files:** This shows the files under the current working path, letting the user know which working path they are in, which is very important for reading and writing files.

You can get the current working path by entering the `getwd()` function in the Console:

If what is shown under Files is not the current working path, that is caused by the view not being refreshed in time. You can click the arrow next to the Console string to update it, as shown below.

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529213112.png" style="zoom:50%;" />

**Plots:** Plots you have drawn will be displayed here.

**Packages:** Shows the packages that have been installed; a checkmark means it has been loaded.

To install a Package, click Install, then enter the package name; you can also enter the corresponding code in the Console to install a package, for example `install.packages('data.table')` will install the package "data.table". To update packages, click Update.

**Help:** Look up how to use a function. The figure below shows looking up read.table.

You can also enter the help() function in the Console, and inside the () enter the function you want to look up. For example: help(read.table). Or directly enter `?read.table` in the Console, as shown below.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529213512.png)

**Viewer:** Used to display local web page files. It is rarely used.

#### 1.5 RStudio Settings

- Switching between different R versions

R allows multiple versions to coexist, for example having 2 versions installed on the computer at the same time (as shown below). Through RStudio you can conveniently switch between the various R versions.

Click **Tools** → **Global Options...**

Then click **General** → **Change...** → **Choose a specific version of R** → select the R version to switch to → **OK** → **OK**; the next time you start RStudio, R will switch to the corresponding version. Note here that the R versions appearing in "Choose a specific version of R" are those that have already been configured in the environment variables. Versions without configured environment variables will not be displayed automatically; you need to click Browse to select the version you installed.

- Switching the package installation mirror

Because of slow network speeds, package installation sometimes fails.

In this case, you can solve it by switching the package installation to a China mirror: click **Tools** → **Global Options...**, then click **Packages** → **Change...** → **select a China mirror** → **OK** → **OK**. As shown below, from now on all package installations will go through this mirror.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529213853.png)

(Haha, there is even a Nanjing University mirror)

- Modifying the interface style

You can set it through **Tools** → **Global Options...**, then clicking **Appearance**.

- Code encoding format

Sometimes when you open code someone sent you, the Chinese comments inside turn into garbled text. You can set it through **Tools** → **Global Options...**, then clicking **Code** → **Saving**. Generally choose UTF-8.

Actually you can also just reopen it with the encoding directly:

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529214237.png" style="zoom:50%;" />

### 2. Package Management and Application in R

#### 2.1 Installing R Packages

- Through the menu

Packages -> Install package(s) -> in the dialog box that pops up, select the package you want to install, then confirm.

- Using a command

```R
install.packages("package_name","dir")
```

package_name: specifies the name of the package to install; please note case sensitivity.

dir: the path where the package is installed. By default it is installed in the ..\library folder. You can use this parameter to modify it and choose the installation folder.

- Local installation

If you have already downloaded the corresponding package's compressed file, you can install it locally. Please note that the file extension for installation differs across the Windows, Unix, and macOS operating systems:

1) Compiled and run in a Linux environment: tar.gz file

2) Compiled and run in a Windows environment: .zip file

3) Compiled and run in a macOS environment: .tgz file

#### 2.2 Loading R Packages

After a package is installed, if you want to use its functionality, you must first load the package into memory (by default, R loads the base packages after startup). The command to load a package:

```R
Library(“包名”)
Require(“包名”)
```

Both library and require can load a package, but there is a difference between the two.

Within a function, if a package does not exist, execution will stop when it reaches library, whereas require will continue executing.

#### 2.3 Viewing Information About a Package

```R
library(help="package_name")
```

The main contents include, for example: package name, author, version, update time, functionality description, open-source license, storage location, and the main functions.

```R
help(package = "package_name")
```

The main contents include all of the package's built-in functions; this is a more detailed help document<br>

```R
find.package() 
或者
.path.package()
```

Check which packages are loaded in the current environment

```R
detach()
```

Remove a package from memory

```R
data(dsname, package="package_name")
```

Load data from another package into memory

```R
data( package="package_name")
```

See what data the package contains

```R
library()
```

List all installed packages

### 3. R Language Syntax Basics

#### 3.1 Basic Commands

- ls()  list the variables in the current workspace memory
- rm(args)  remove a memory variable (Remove Object)
- history()  view the list of historical commands
- help("function")  open a function's help document
- names(variable)  return the name attributes in a dataset
- mode(variable)/class(variable)  return the basic data type
-  is(variable)  return the variable's basic data type and advanced data type

#### 3.2 Variable Naming Rules

- Composed of letters, numbers, or underscores
- The variable name starts with a letter, or with a dot not followed by a number

#### 3.3 Operators

- Arithmetic operators

| Operator | Description                       | Example                                                      |
| :----: | -------------------------------- | :----------------------------------------------------------- |
|   +    | Adds two vectors                 | v <- c( 2,5.5,6) <br> t <- c(8, 3, 4) <br> print(v+t) <br> It produces the following result: <br> [1] 10.0  8.5  10.0 |
|   −    | Subtracts the second vector from the first | v <- c( 2,5.5,6)<br>t <- c(8, 3, 4)<br>print(v-t) <br>It produces the following result:<br>[1] -6.0  2.5  2.0 |
|   *    | Multiplies two vectors           | v <- c( 2,5.5,6) <br> t <- c(8, 3, 4) <br/>print(v*t) <br/>It produces the following result:<br/>[1] 16.0 16.5 24.0 |
|   /    | Divides the first vector by the second | v <- c( 2,5.5,6) <br/><- c(8, 3, 4) <br/>print(v/t) <br/>It produces the following result:<br/>[1] 0.250000 1.833333 1.500000 |
|   %%   | Gives the remainder of the first vector by the second | v <- c( 2,5.5,6) <br/>t <- c(8, 3, 4) <br/>print(v%%t) <br/>It produces the following result:<br/>[1] 2.0 2.5 2.0 |
|  %/%   | The result of dividing the first vector by the second (quotient) | v <- c( 2,5.5,6) <br/>t <- c(8, 3, 4) <br/>print(v%/%t) <br/>It produces the following result:[1] 0 1 1 |
|   ^    | The first vector raised to the exponent of the second vector | v <- c( 2,5.5,6)<br/>t <- c(8, 3, 4) <br/>print(v^t) <br/>It produces the following result:<br/>[1]  256.000  166.375 1296.000 |

- Relational operators

Each element of the first vector is compared with the corresponding element of the second vector. The result of the comparison is a Boolean value.

| Operator | Description                                                  | Example                                                      |
| :----: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|   >    | Checks whether each element of the first vector is greater than the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v>t) <br/>It produces the following result: <br/>[1] FALSE  TRUE FALSE FALSE |
|   <    | Checks whether each element of the first vector is less than the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v < t) <br/>It produces the following result:<br/>[1]  TRUE FALSE  TRUE FALSE |
|   ==   | Checks whether each element of the first vector is equal to the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v==t) <br/>It produces the following result:<br/>[1] FALSE FALSE FALSE  TRUE |
|   <=   | Checks whether each element of the first vector is less than or equal to the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v<=t) <br/>It produces the following result:<br/>[1]  TRUE FALSE  TRUE  TRUE |
|   >=   | Checks whether each element of the first vector is greater than or equal to the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v>=t) <br/>It produces the following result:<br/>[1] FALSE  TRUE FALSE  TRUE |
|   !=   | Checks whether each element of the first vector is not equal to the corresponding element of the second vector. | v <- c(2,5.5,6,9) <br/>t <- c(8,2.5,14,9) <br/>print(v!=t) <br/>It produces the following result:<br/>[1]  TRUE  TRUE  TRUE FALSE |

- Logical operators

It applies only to logical, numeric, or complex vectors. All numeric values greater than 1 are considered to have a logical value of TRUE.

Each element of the first vector is compared with the corresponding element of the second vector. The result of the comparison is a Boolean value.

| Operator | Description                                                  | Example                                                      |
| :----: | :----------------------------------------------------------- | ------------------------------------------------------------ |
|   &    | This is called the element-wise logical AND operator. It combines each element of the first vector with the corresponding element of the second vector, and gives a TRUE if both elements are TRUE. | v <- c(3,1,TRUE,2+3i) <br/>t <- c(4,1,FALSE,2+3i) <br/>print(v&t) <br/>It produces the following result:<br/>[1]  TRUE  TRUE FALSE  TRUE |
|   \\|This is called the element-wise logical OR operator. It combines each element of the first vector with the corresponding element of the second vector, and gives a TRUE if either of these elements is TRUE.   | v <- c(3,0,TRUE,2+2i) <br/>t <- c(4,0,FALSE,2+3i) <br/>print(v\\t) <br/>It produces the following result:<br/>[1]  TRUE FALSE  TRUE  TRUE |
|   !    | This is called the logical NOT operator. It takes each element of the vector and gives the opposite logical value. | v <- c(3,0,TRUE,2+2i) <br/>print(!v) <br/>It produces the following result:<br/>[1] FALSE  TRUE FALSE FALSE |

The logical operators && and || consider only the first element of the vector and give a vector of a single element as output.

| Operator | Description                                                  | Example                                                      |
| :----: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|   &&   | The so-called logical AND operator. It takes the first element of both vectors and gives TRUE only if both are TRUE. | v <- c(3,0,TRUE,2+2i) <br/>t <- c(1,3,TRUE,2+3i) <br/>print(v&&t) <br/>It produces the following result:<br/>[1] TRUE |
|  \\  | The so-called logical OR operator. It takes the first element of both vectors and gives TRUE only if both are TRUE. | v <- c(0,0,TRUE,2+2i) <br/>t <- c(0,3,TRUE,2+3i) <br/>print(v\\t)<br/>[1] FALSE |

- Assignment operators

These operators are used to assign values to vectors.

| Operator                              | Description       | Example                                                      |
| ------------------------------------- | ---------- | ------------------------------------------------------------ |
| <-  <br/>or <br/>=  <br/>or  <br/><<- | Called left assignment | v1 <- c(3,1,TRUE,2+3i) <br/>v2 <<- c(3,1,TRUE,2+3i) <br/>v3 = c(3,1,TRUE,2+3i) <br/>print(v1) <br/>print(v2) <br/>print(v3) <br/>It produces the following result:<br/>[1] 3+0i 1+0i 1+0i 2+3i <br/>[1] 3+0i 1+0i 1+0i 2+3i <br/>[1] 3+0i 1+0i 1+0i 2+3i |
| ->  <br/>or <br/>->>                  | Called right assignment | c(3,1,TRUE,2+3i) -> v1 <br/>c(3,1,TRUE,2+3i) ->> v2  <br/>print(v1) <br/>print(v2) <br/>It produces the following result:<br/>[1] 3+0i 1+0i 1+0i 2+3i <br/>[1] 3+0i 1+0i 1+0i 2+3i |

- Other operators

These operators are used for specific purposes, rather than general mathematical or logical operations.

| Operator | Description                                        | Example                                                      |
| :----: | -------------------------------------------------- | ------------------------------------------------------------ |
|   :    | The colon operator. It creates a vector of a series of numbers in sequence | v <- 2:8 <br/>print(v) <br/>It produces the following result:<br/>[1] 2 3 4 5 6 7 8 |
|  %in%  | This operator is used to identify whether an element belongs to (is in) a vector. | v1 <- 8 <br/>v2 <- 12 <br/>t <- 1:10 <br/>print(v1 %in% t)  <br/>print(v2 %in% t) <br/>It produces the following result:<br/>[1] TRUE <br/>[1] FALSE |
|  %*%   | This operator is used to multiply a matrix by its transpose. | M = matrix( c(2,6,5,1,10,4), nrow=2,ncol=3,byrow = TRUE) <br/>t = M %*% t(M)<br/> print(t) <br/>It produces the following result:  <br/>[,1] [,2] [1,]   65   82 [2,]   82  117 |

### 4. File Input and Output

- Reading a database or matrix from a file

The read.table() function is one of R's most basic functions, mainly used to read rectangular tabular data.

```R
Usage
read.table(file, header = FALSE, sep = "", quote = "\"'",
           dec = ".", numerals = c("allow.loss", "warn.loss", "no.loss"),
           row.names, col.names, as.is = !stringsAsFactors,
           na.strings = "NA", colClasses = NA, nrows = -1,
           skip = 0, check.names = TRUE, fill = !blank.lines.skip,
           strip.white = FALSE, blank.lines.skip = TRUE,
           comment.char = "#",
           allowEscapes = FALSE, flush = FALSE,
           stringsAsFactors = default.stringsAsFactors(),
           fileEncoding = "", encoding = "unknown", text, skipNul = FALSE)
```

The descriptions of each parameter are as follows:

(1) file

file is an ASCII text file with delimiters.

(2) header

A logical variable indicating whether the file contains the variable names in the first line.

If header is set to TRUE, the first line is required to have one fewer column than the number of data columns.

(3) sep

The delimiter that separates the data. The default is sep="".

The read.table() function can use one or more spaces, tab characters, newlines, or carriage returns as delimiters.

(4) quote

A string used to delimit strings that contain special characters; the default value is TRUE (") or single quotes. (`)

(5) dec

decimal, used to indicate the decimal point of decimals in the data file.

(6) numerals

A string type. Used to specify how to convert numbers in the file to double-precision data in cases where precision would be lost during conversion.

(7) row.names

A vector holding the row names. You can use this parameter to give the actual row name of each row in the form of a vector. Or the column number or column name string of the column in the table to be read that contains the row names.

When the data file has a row header and the field names in the first line are one fewer than the data columns, the first column in the data file will be treated as the row names. Apart from this case, when the row.names parameter is not given, the row names read in will be numbered automatically.

You can use row.names = NULL to force the rows to be numbered.

(8) col.names

A vector specifying the column names. By default it is formed of "V" plus the column number, i.e. V1, V2, V3......

Tip:

rownames and colnames are the row name and column name functions in the base package;

whereas row.names and col.names are the row name and column name parameters in the read.table function

(9) as.is

This parameter is used to determine whether the read.table() function converts character data to factor variables when reading it. When its value is FALSE, the function converts character data to factor data; when the value is TRUE, it keeps it as character data. Its value can be a logical vector (which can be recycled when necessary), a numeric vector, or a character vector, to control which columns are not converted to factors.

Note: You can prevent all columns, including numeric columns, from being converted to factors by setting the parameter colClasses = "character".

(10) na.strings

An optional character vector used to represent missing values.

na.strings=c("-9","?") converts the values -9 and ? to NA when reading the data

(11) colClasses

A character vector used to specify the class to which each column belongs.

(12) nrows

An integer. Used to specify the maximum number of rows to read from the file. Negative numbers or other invalid values will be ignored.

(13) skip

An integer. The number of lines to ignore when reading the data.

(14) check.names

A logical value. When this parameter is set to TRUE, the variable names in the data frame will be checked to ensure they are syntactically valid variable names.

(15) fill

A logical value. When blank lines are not ignored (i.e. blank.lines.skip=FALSE) and fill is set to TRUE, if the data in a certain row of the data file is fewer than other rows, blank fields are added automatically.

(16) strip.white

A logical value, defaulting to FALSE. This parameter is only effective when the sep parameter is specified. When this parameter is set to TRUE, the leading and trailing spaces of unquoted string fields in the data file will be removed.

(17) blank.lines.skip

A logical value. When this parameter is set to TRUE, blank lines in the data file will be ignored. The default value is TRUE.

(18) comment.char

A character type. A vector containing a single character or an empty character. It represents the starting character of a comment. You can use "" to turn off comments.

(19) allowEscapes

A logical value. C-style escape characters such as "\n". If such escape characters are not contained within a string, the function may interpret them as field separators.

(20) flush

A logical value. The default value is FALSE. When this parameter is set to TRUE, the function moves to the next line after reading the specified number of columns. This allows the user to add comments after the last field.

(21) stringsAsFactors

A logical value, marking whether character vectors need to be converted to factors; the default is TRUE.

(22) fileEncoding

A string type, specifying the encoding of the file. If this parameter is specified, the text data is re-encoded according to the specified format.

(23) encoding

The assumed encoding of the input string.

(24) text

A string type. When the file parameter is not provided, the function can read data from text via a text connection.

(25) skipNul

A logical value. Whether to ignore null values. The default is FALSE.

- Writing files

R is mainly used for statistical analysis, and reading files may be more common than writing files, but writing files is also important. Use read.table() to read files, and write.table() to write files.

```R
write.table(x, file = "", append = FALSE, quote = TRUE, sep = " ",
            eol = "\n", na = "NA", dec = ".", row.names = TRUE,
            col.names = TRUE, qmethod = c("escape", "double"),
            fileEncoding = "")
```

**Parameter descriptions:**

x: The object to be written, preferably a matrix or data frame. If it is not, it attempts to coerce x into a data frame.

file: A string naming the file, or a connection opened for writing. " " means output to the console.

append: Logical. Only relevant when file is a string.

If TRUE, the output is appended to the file

If FALSE, the contents of any existing file with that name are destroyed

quote: A logical value (TRUE or FALSE) or a numeric vector. If TRUE, any character or factor columns will be surrounded by double quotes. If a numeric vector, its elements are the indices of the columns to be quoted. In both cases, the row and column names are quoted if they are written. If FALSE, nothing is quoted.

sep: The field separator string. The values in each row of x are separated by this string.

row.names: A logical value indicating whether the row names of x are written along with x, or a character vector of row names to write

col.names: Similar to the above.



<br>

This article is mainly excerpted from:

https://zhuanlan.zhihu.com/p/76576574

https://www.cnblogs.com/csguo/p/7293945.html
