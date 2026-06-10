---
title: "MATLAB Study Notes (4) Basic Plotting Structure and File Access"
date: 2020-08-01T18:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["MATLAB", "MRIO"]
summary: "Everything is for MRIO!"
---

### 1 Basics

#### 1.1 plot()

```matlab
plot(x,y)	% plots each vector pair (x,y)
plot(y) 	% plots each vector pair (x,y), where x=[1…n], n=length(y); the default horizontal axis uses 1, 2, 3, 4...
plot(cos(0:pi/20:2*pi));	% First plot!
```

Multiple curves in one figure:

```matlab
hold on
plot(cos(0:pi/20:2*pi));
plot(sin(0:pi/20:2*pi));
hold off

% Alternatively

x = 0:pi/100:2*pi;
y = sin(x);
y2 = sin(x-.25);
y3 = sin(x-.5);
plot(x,y,x,y2,x,y3)

% Labels
legend('sin(x)','sin(x-.25)','sin(x-.5)')
```

#### 1.2 Plot style

```matlab
plot(x,y,'str') 	% plots each vector pair (x,y) using the format defined in str (check linespec)
```

<img src="https://i.loli.net/2020/08/01/m6WvyZ3Yr2Qwnkc.png" style="zoom:80%;" />

You can change color and line style, or do it manually in the plot window: View → Plot Browser!

```matlab
x=0:0.5:4*pi;
y=sin(x); h=cos(x); w=1./(1+exp(-x));
g=(1/(2*pi*2)^0.5).*exp((-1.*(x-2*pi).^2)./(2*2^2));
plot(x,y,'bd-',x,h,'gp:',x,w,'ro-',x,g,'c^-');

legend('sin(x)','cos(x)','Sigmoid','Gauss function');	% add labels
```

#### 1.3 title() and label()

```matlab
x = 0:0.1:2*pi; y1 = sin(x); y2 = exp(-x);
plot(x, y1, '--*', x, y2, ':o');
xlabel('t = 0 to 2\pi');	% x-axis title; backslash is the escape character
ylabel('values of sin(t) and e^{-x}')	% y-axis title
title('Function Plots of sin(t) and e^{-x}');	% add figure title
legend('sin(t)','e^{-x}');	% add legend
```

#### 1.4 text() and annotation()

```matlab
x = linspace(0,3); y = x.^2.*sin(x); plot(x,y);
line([2,2],[0,2^2*sin(2)]);
str = '$$ \int_{0}^{2} x^2\sin(x) dx $$';	% LaTeX syntax
text(0.25,2.5,str,'Interpreter','latex');	% Position of the displayed string, interpreter set to LaTeX
annotation('arrow','X',[0.32,0.5],'Y',[0.6,0.4]);	% Arrow start and end position
```

#### 1.5 Figure adjustment

<img src="https://i.loli.net/2020/08/01/jiRlvwI5qDZ6gpP.png" style="zoom:80%;" />

The **Property Inspector** lets you change many plot objects!

### 2 Further Customization

<img src="https://i.loli.net/2020/08/01/vK5GSPZsQaf7iLn.png" style="zoom:80%;" />

#### 2.1 Setting limits

<img src="https://i.loli.net/2020/08/01/UrTphAX5Ne3zMwC.png" style="zoom:80%;" />

Various customizations, but using the Property Editor gives a more intuitive way to adjust!

#### 2.2 Multiple figures

The `figure` command,

```matlab
x = -10:0.1:10;
y1 = x.^2 - 8;
y2 = exp(x);
figure, plot(x,y1);
figure, plot(x,y2);
```

Figure Position and Size — a bit like CSS

```matlab
figure('Position', [left, bottom, width, height]);
```

Multiple plots combined into one:

```matlab
subplot(m, n, 1);
```

<img src="https://i.loli.net/2020/08/01/cBTfr2zmJpM3yDF.png" style="zoom:67%;" />

```matlab
t = 0:0.1:2*pi; x = 3*cos(t); y = sin(t);
subplot(2, 2, 1); plot(x, y); axis normal
subplot(2, 2, 2); plot(x, y); axis square
subplot(2, 2, 3); plot(x, y); axis equal
subplot(2, 2, 4); plot(x, y); axis equal tight
```

<img src="https://i.loli.net/2020/08/01/X6ayoqYjC27iLZO.png" style="zoom:80%;" />

#### 2.3 Some functions

```matlab
grid on/off 		% Make the grid visible or invisible
box on/off 			% Make the box visible or invisible
axis on/off 		% Make the axes visible or invisible
axis normal 		% Automatically adjust the aspect ratio of the axes
					% and the relative scaling of the data units
axis square 		% Make the current axes region square
axis equal 			% Set the aspect ratio so that the data units are the
					% same in every direction
axis equal tight 	% Set the axis limits to the range of the data
axis image 			% Let the plot box fit tightly around the data
axis ij 			% Place the origin of the coordinate system in the
					% upper left corner
axis xy				% Place the origin in the lower left corner
```

#### 2.4 Saving

<img src="https://i.loli.net/2020/08/01/VG9UWl4MACOpn7K.png" style="zoom:80%;" />

`print` outputs high-resolution images!
