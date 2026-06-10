---
title: "投入产出分析学习笔记（三） 一个关于WIOD碳排的计算"
date: 2020-08-14T17:30:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["投入产出分析", "MRIO", "Input-Output"]
summary: "github上老师分享的命令，学习一下。真的举步维艰，很难找到指导者。这一点距离，天壤。"
---

来源：https://github.com/FabioMonsalve/EEMRIO_Matlab



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
    ;'SVK';'SVN';'SWE';'TUR';'TWN';'USA';'ROW'];		% 生成国家名的列向量，共41个

% LOADING DATA -----------------------------------------------------------
% First retrived the required files from http://www.wiod.org, release 2013
% File the downloaded dataset in the same directory than this code (or,
% alternatively, change the set Path preferences in matlab)
% Loading Input-Output Table of last available year (2009)
[num,txt]=xlsread('wiot09_row_sep12.xlsx','WIOT_2009','e4:bkf1449');		% 以num格式读取excel中的数字，以txt格式读取excel中的字符串
WIOT_09=num;		% 将读取结果的数字部分命名为WIOT_09

% Loading Emissions of last available year (2009)
EM_GHG=zeros(s*r,1);		% 建立一个行数为s*r，列数为1的0向量
% Loading emissions vectors for all wiod countries and convert to CO2eq
for k=1:r		% k为1到r的数值
    ini_k=(k-1)*s+1;		% ini_k的计算
    fin_k=k*s; 		% fni_k的计算
    nombre_fichero=sprintf('%s_AIR_May12.xls',paises_wiod(k,:));		% 读取后缀名为AIR_MAY12的excel，前缀名为paises_wiod中的第k个
    EMI_TEMP1=(xlsread(nombre_fichero,'2009','c2:j42'));		% 读取上一条excel中名为2009的sheet
      % Removing NaN from emissions matrix
        ind=find(isnan(EMI_TEMP1)); 		% 找到EMI_TEMP1中的空值
        EMI_TEMP1(ind)=0;		% 不知道什么意思，将空值赋值为0？？？
    EMI_TEMP2(:,:)=EMI_TEMP1(1:35,:);		% 新建一个变量，为右边向量中的1-35行，及所有的列
    EM_GHG(ini_k:fin_k)=EMI_TEMP2(:,1)+EMI_TEMP2(:,2)*(28/1000)+EMI_TEMP2(:,3)*(265/1000);
end		% 为什么要乘0.028和0.265？？？

% SOLVING DE MODEL -------------------------------------------------------
% Extracting Intermediate Consumption Matrix for year 2009
Z_09=WIOT_09(1:s*r,1:s*r);		% Z矩阵为WIOT_09中的部门，s*r行和s*r列，起始位置为（1，1）
% Extracting Output row vector
Q_09=WIOT_09(1443,1:s*r);		% Q矩阵，即总产量部分，为投入产出表的最后一行（第1443行）
% Removing zeros		% 将Q矩阵中为0的值，赋值为1
    for i=1:s*r
        if (Q_09(i)==0) 
            Q_09(i)=1;
        end
    end

% Computing matrix of technical coefficientes
A_09=Z_09/diag(Q_09); % Alternatively A_09=Z_09*inv(diag(Q_09));		% 计算投入技术矩阵，即完全消耗系数矩阵

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





MATLAB关于矩阵的一些语法

```
冒号“:”可以表示矩阵中的多个元素。例如A( 1 : k , n )表示矩阵A中第n列的1~k的元素，B( m , : )表示矩阵B中第m行的所有元素。

因此，根据上面的原理，a( : , : , 6)表示取三维矩阵a的所有第一维、第二维，第三维的第6个元素，a( : , : , 1 : 6 )表示取三维矩阵a的所有第一维、第二维，第三维的第1—6个元素。

引自：https://zhidao.baidu.com/question/181592920.html
```
