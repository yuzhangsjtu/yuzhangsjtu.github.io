---
title: "MATLAB Study Notes (5) Matrix Expressions"
date: 2020-08-22T11:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "Everything is for MRIO!"
---

### 1 Matrix Expression

|      | Expression                | Function                                                     |
| ---- | ------------------------- | ------------------------------------------------------------ |
| 1    | A(1)                      | Reshapes the 2‑D matrix **A** into a 1‑D array and returns the first element |
| 2    | A(: , j)                  | Returns the column vector of the j‑th column of the 2‑D matrix **A** |
| 3    | A( i , :)                 | Returns the row vector of the i‑th row of the 2‑D matrix **A** |
| 4    | A(: , j : k)              | Returns the submatrix consisting of the column vectors from the j‑th to the k‑th column of the 2‑D matrix **A** |
| 5    | A( i : k , :)             | Returns the submatrix consisting of the row vectors from the i‑th to the k‑th row of the 2‑D matrix **A** |
| 6    | A( i : k , j : m)         | Returns the submatrix consisting of the intersection of the row vectors from the i‑th to k‑th row and the column vectors from the j‑th to m‑th column of the 2‑D matrix **A** |
| 7    | A(:)                      | Merges every column of the 2‑D matrix **A** into a single column vector |
| 8    | A( j : k)                 | Returns a row vector whose elements are the j‑th through k‑th elements of A(:) |
| 9    | A([ j1 j2…])              | Returns a row vector whose elements are the j1‑th, j2‑th, … elements of A(:) |
| 10   | A(: , [ j1 j2 …])         | Returns the column vectors of the j1‑th column, j2‑th column, etc. of matrix **A** |
| 11   | A([ i1 i2 …] : ,)         | Returns the row vectors of the i1‑th row, i2‑th row, etc. of matrix **A** |
| 12   | A([ i1 i2 …] , [ j1 j2 …]) | Returns the elements at the intersection of the j1‑th column, j2‑th column, etc. and the i1‑th row, i2‑th row, etc. of matrix **A** |

### 2 Identity Matrix and Zero Matrix

|      | Expression         | Function                                               |
| ---- | ------------------ | ------------------------------------------------------ |
| 1    | ones(n)            | Creates an n×n matrix of 1s                            |
| 2    | ones(m,n,……,p)     | Creates an m×n×……×p array of 1s                        |
| 3    | ones(size(A))      | Creates an array of 1s with the same size as matrix A  |
| 4    | zeros(n)           | Creates an n×n matrix of 0s                            |
| 5    | zeros(m,n,……,p)    | Creates an m×n×……×p array of 0s                        |
| 6    | zeros(size(A))     | Creates an array of 0s with the same size as matrix A  |
| 7    | eye(n)             | Creates an n×n identity matrix                         |
| 8    | eye(m,n)           | Creates an m×n identity matrix                         |
| 9    | eye(size(A))       | Creates an identity matrix with the same size as matrix A |

Reference:

1.https://blog.csdn.net/zaishuiyifangxym/article/details/81746332

2.https://blog.csdn.net/huzhizhewudi/article/details/84404452?depth_1-
