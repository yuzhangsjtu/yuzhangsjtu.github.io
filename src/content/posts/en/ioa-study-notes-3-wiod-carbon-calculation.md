---
title: "Input-Output Analysis Study Notes (3) — A Carbon Emission Calculation with WIOD"
date: 2020-08-14T17:30:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Input-Output Analysis", "MRIO", "Input-Output"]
summary: "Studying the commands the teacher shared on GitHub. It really is an uphill struggle, and a guide is hard to find. This small gap feels like a world apart."
---

Source: https://github.com/FabioMonsalve/EEMRIO_Matlab



```python
%% BASIC MODEL FOR ESTIMATING GLOBAL GREEN HOUSE GASES (GHG) EMISSIONS
% USING WIOD Database, release 2013.
tic
clear
% setting parameters
s=35;       % Number of sectors of WIOD Database
r=41;       % Number of regions of WIOD Data
df=5;       % Categories of final demanda
paises_wiod=['AUS';'AUT';'BEL';'BGR';'BRA';'CAN';'CHN';'CYP';'CZE';'DEU';...
    'DNK';'ESP';'EST';'FIN';'FRA';'GBR';'GRC';'HUN';'IDN';'IND';'IRL';'ITA'...
    ;'JPN';'KOR';'LTU';'LUX';'LVA';'MEX';'MLT';'NLD';'POL';'PRT';'ROU';'RUS'...
    ;'SVK';'SVN';'SWE';'TUR';'TWN';'USA';'ROW'];		% Generate a column vector of country names, 41 in total

% LOADING DATA -----------------------------------------------------------
% First retrived the required files from http://www.wiod.org, release 2013
% File the downloaded dataset in the same directory than this code (or,
% alternatively, change the set Path preferences in matlab)
% Loading Input-Output Table of last available year (2009)
[num,txt]=xlsread('wiot09_row_sep12.xlsx','WIOT_2009','e4:bkf1449');		% Read the numbers in the Excel file as num and the strings in the Excel file as txt
WIOT_09=num;		% Name the numeric part of the read result WIOT_09

% Loading Emissions of last available year (2009)
EM_GHG=zeros(s*r,1);		% Create a zero vector with s*r rows and 1 column
% Loading emissions vectors for all wiod countries and convert to CO2eq
for k=1:r		% k takes values from 1 to r
    ini_k=(k-1)*s+1;		% Calculation of ini_k
    fin_k=k*s; 		% Calculation of fni_k
    nombre_fichero=sprintf('%s_AIR_May12.xls',paises_wiod(k,:));		% Read the Excel file with the suffix AIR_MAY12, prefixed with the k-th entry of paises_wiod
    EMI_TEMP1=(xlsread(nombre_fichero,'2009','c2:j42'));		% Read the sheet named 2009 from the Excel file in the previous line
      % Removing NaN from emissions matrix
        ind=find(isnan(EMI_TEMP1)); 		% Find the NaN values in EMI_TEMP1
        EMI_TEMP1(ind)=0;		% Not sure what this means - assign 0 to the NaN values???
    EMI_TEMP2(:,:)=EMI_TEMP1(1:35,:);		% Create a new variable: rows 1-35 of the vector on the right, and all the columns
    EM_GHG(ini_k:fin_k)=EMI_TEMP2(:,1)+EMI_TEMP2(:,2)*(28/1000)+EMI_TEMP2(:,3)*(265/1000);
end		% Why multiply by 0.028 and 0.265???

% SOLVING DE MODEL -------------------------------------------------------
% Extracting Intermediate Consumption Matrix for year 2009
Z_09=WIOT_09(1:s*r,1:s*r);		% The Z matrix is the sector part of WIOT_09, with s*r rows and s*r columns, starting at (1,1)
% Extracting Output row vector
Q_09=WIOT_09(1443,1:s*r);		% The Q matrix, i.e., the total output part, is the last row of the input–output table (row 1443)
% Removing zeros		% Assign 1 to the values in the Q matrix that are 0
    for i=1:s*r
        if (Q_09(i)==0) 
            Q_09(i)=1;
        end
    end

% Computing matrix of technical coefficientes
A_09=Z_09/diag(Q_09); % Alternatively A_09=Z_09*inv(diag(Q_09));		% Compute the input technology matrix, i.e., the total consumption coefficient matrix

% Computing Leontieff inverse
I=eye(s*r); 
MQ_09=inv(I-A_09);

% Computing Emissions coefficientes
e_09=diag(EM_GHG)/diag(Q_09);

% Processing The bill of Final Demand
DF_WIOT_09=WIOT_09(1:s*r,1436:1640);    % Isolation of Final Demand
DF_Country=zeros(s*r,r);
DF_09=zeros(s*r,s*r);  
    for j=1:r
       if (j==1)
            ini_country=1;
            fin_country=df;
       else
            ini_country=df*(j-1)+1;
            fin_country=ini_country+(df-1);
       end
        DF_Country(:,j)=sum(DF_WIOT_09(:,ini_country:fin_country),2);
        % - Diagonalization    
         ini_j=s*(j-1)+1;
         fin_j=ini_j+s-1;
         for i=1:r
             ini_i=s*(i-1)+1;
             fin_i=ini_i+s-1;
             DF_09(ini_i:fin_i,ini_j:fin_j)=diag(DF_Country(ini_i:fin_i,j));
         end
    end
    
% Computing GHG Emissions for 41 countries/resgions and 35 sectors
EM_GHG_41R35s_09=(e_09*MQ_09)*DF_09;

% EXPORTING RESULTS ------------------------------------------------------
% Writing row headings (region/country and sector)
xlswrite('Results_WIOD_Basic_Model_EMISS.xlsx',txt,'EMISS41R','e4');    
% Writing column headings (region/country and sector)
xlswrite('Results_WIOD_Basic_Model_EMISS.xlsx',txt','EMISS41R','b7');
% Writing final results
xlswrite('Results_WIOD_Basic_Model_EMISS.xlsx',EM_GHG_41R35s_09,'EMISS41R','e7');

toc



```





Some MATLAB syntax concerning matrices

```
The colon ":" can denote multiple elements of a matrix. For example, A( 1 : k , n ) denotes elements 1 to k of the n-th column of matrix A, and B( m , : ) denotes all the elements of the m-th row of matrix B.

Therefore, by the same principle, a( : , : , 6) means taking all of the first and second dimensions of the three-dimensional matrix a and the 6th element of the third dimension, and a( : , : , 1 : 6 ) means taking all of the first and second dimensions of the three-dimensional matrix a and elements 1-6 of the third dimension.

Quoted from: https://zhidao.baidu.com/question/181592920.html
```
