---
title: "The Mac Terminal Commands Cheat Sheet"
date: 2023-02-15T14:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["快捷键"]
summary: "Mac terminal上的操作小抄！"
---

#### 来自ChatGPT的回答：

> 在 macOS 上，Terminal 是一个非常有用的工具，可以通过命令行来完成各种任务。以下是一些常用的命令：
>
> 1. `ls`：列出当前目录下的文件和文件夹。
> 2. `cd`：改变当前目录到指定的目录，例如 `cd Documents`。
> 3. `mkdir`：创建一个新的目录，例如 `mkdir new_folder`。
> 4. `touch`：创建一个新的文件，例如 `touch new_file.txt`。
> 5. `rm`：删除一个文件或目录，例如 `rm file.txt` 或 `rm -r folder`（删除一个目录及其内容）。
> 6. `cp`：复制文件或目录，例如 `cp file.txt folder`（将文件复制到目录中）。
> 7. `mv`：移动文件或目录，例如 `mv file.txt folder`（将文件移动到目录中）。
> 8. `cat`：显示文件的内容，例如 `cat file.txt`。
> 9. `echo`：在终端输出指定的文本，例如 `echo "Hello, World!"`。
> 10. `grep`：在文件中查找指定的字符串，例如 `grep "search_term" file.txt`。
>
> 还有很多其他命令可用，这些命令只是一些常见的例子。要学习更多命令，可以在终端中输入 `man` 命令来查看命令的帮助文档。例如，要查看 `ls` 命令的帮助文档，可以在终端中输入 `man ls`。

<br/>

#### 来自New Bing的回答：

> 你好，这是必应。我找到了一些网页，可以帮助你了解 Mac 上的 Terminal 命令。你可以参考以下的搜索结果：
>
> - [1](https://www.cnblogs.com/abeen/p/4104158.html) Mac OS Terminal 几个快捷键 - ABeen - 博客园
> - [2](https://www.cnblogs.com/favana/p/5545132.html) Mac上简单常用Terminal命令 - favana - 博客园
> - [3](https://blog.csdn.net/a11101171/article/details/52239467) mac常用Terminal命令與快捷鍵參考_a11101171的博客-CSDN博客
> - [4](https://www.jianshu.com/p/97c0f76ee09a) Mac Terminal 终端常用命令总结 - 简书
> - [5](https://www.cnblogs.com/yong001/p/12052453.html) 在Mac上打开终端的7种简单方法 - 余生不见空 - 博客园
> - [6](https://support.apple.com/zh-cn/guide/terminal/apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac) 在 Mac 上的“终端”中执行命令和运行工具 - 官方 Apple 支持 (中国)
>
> 另外，我还找到了一个英文的 Terminal 命令速查表[7](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/#:~:text=The Mac Terminal Commands Cheat Sheet  ,you're current ...  46 more rows )，你可以用来参考一些常用的命令和操作。这里是一些例子：
>
> - Tab: 自动补全文件和文件夹的名称
> - Ctrl + A: 将光标移动到行首
> - Ctrl + E: 将光标移动到行尾
> - Ctrl + L: 清除屏幕
> - Ctrl + R: 搜索以前使用的命令
> - Ctrl + C: 中断当前的命令
> - Ctrl + D: 退出 Terminal，同 exit 命令
> - Ctrl + Z: 暂停当前的命令
> - cd: 进入到某个文件路径下
> - pwd: 显示当前文件路径
> - ls: 列出当前文件夹下的文件和文件夹
> - cp: 复制文件或文件夹
> - mv: 移动或重命名文件或文件夹
> - rm: 删除文件或文件夹
> - mkdir: 创建一个新的文件夹
> - rmdir: 删除一个空的文件夹
> - touch: 创建一个新的空文件
> - cat: 查看或合并文件的内容
> - echo: 显示一行文本或一个变量的值
> - ping: 测试网络连接
> - curl: 从网上下载文件
> - ssh: 通过安全的 shell 连接到远程服务器
> - scp: 通过安全的 shell 复制文件到远程服务器
> - man: 显示某个命令的手册页
> - help: 显示某个命令的帮助信息
> - history: 显示命令历史记录
> - clear: 清除屏幕
> - exit: 退出 Terminal
>
> 希望这些信息对你有用。😊

<br/>

#### 下文转自：[The Mac Terminal Commands Cheat Sheet](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

macOS is an intuitive operating system, so you don't have to spend lot of time learning the basics; Knowing this, why should you learn and take advantage of the Unix command line available on your Mac? We have four good reasons:

1. There are dozens of open source and freely available Unix-based apps. You don't have to spend money on these.
2. When you're having difficulty searching for files in Spotlight, you can turn to Unix search tools. They're way more powerful than Spotlight.
3. You can manage files, folders, and file archives in an automated manner. Setting up a cron job will handle this automatically.
4. It gives you more power and control over your system.

With so many Mac commands, it's often difficult to remember and use them all. We're here to help with a detailed cheat sheet of Mac Terminal commands you can use to unlock enhanced productivity on your system.

#### The Mac Terminal Commands Cheat Sheet

| COMMAND/                                    | ACTION                                                       |
| :------------------------------------------ | :----------------------------------------------------------- |
| **Shortcuts**                               |                                                              |
| Tab                                         | Auto-complete file and folder names                          |
| Ctrl + A                                    | Go to the beginning of the line you're currently typing on   |
| Ctrl + E                                    | Go to the end of the line you're currently typing on         |
| Ctrl + U                                    | Clear the line before the cursor                             |
| Ctrl + K                                    | Clear the line after the cursor                              |
| Ctrl + W                                    | Delete the word before the cursor                            |
| Ctrl + T                                    | Swap the last two characters before the cursor               |
| Esc + T                                     | Swap the last two words before the cursor                    |
| Ctrl + L                                    | Clear the screen                                             |
| Ctrl + C                                    | Kill whatever you're running                                 |
| Ctrl + D                                    | Exit the current shell                                       |
| Option + →                                  | Move cursor one word forward                                 |
| Option + ←                                  | Move cursor one word backward                                |
| Ctrl + F                                    | Move cursor one character forward                            |
| Ctrl + B                                    | Move cursor one character backward                           |
| Ctrl + Y                                    | Paste whatever was cut by the last command                   |
| Ctrl + Z                                    | Puts whatever you're running into a suspended background process |
| Ctrl + _                                    | Undo the last command                                        |
| Option + Shift + Cmd + C                    | Copy plain text                                              |
| Shift + Cmd + V                             | Paste the selection                                          |
| exit                                        | End a shell session                                          |
| **Basics**                                  |                                                              |
| / (Forward Slash)                           | Top level directory                                          |
| . (Single Period)                           | Current directory                                            |
| .. (Double Period)                          | Parent directory                                             |
| ~ (Tilde)                                   | Home directory                                               |
| sudo [command]                              | Run command with the security privileges of the super user   |
| nano [file]                                 | Opens the Terminal editor                                    |
| open [file]                                 | Opens a file                                                 |
| [command] -h                                | Get help about a command                                     |
| man [command]                               | Show the help manual of the command                          |
| **Change Directory**                        |                                                              |
| cd                                          | Home directory                                               |
| cd [folder]                                 | Change directory, e.g. cd Documents                          |
| cd ~                                        | Home directory                                               |
| cd/                                         | Root of the drive                                            |
| cd -                                        | Previous directory or folder you last browsed                |
| pwd                                         | Show your working directory                                  |
| cd..                                        | Move up to the parent directory                              |
| cd../..                                     | Move up two levels                                           |
| **List Directory Contents**                 |                                                              |
| ls                                          | Display the name of files and subdirectories in the directory |
| ls -C                                       | Force multi-column output of the listing                     |
| ls -a                                       | List all entries including those with .(period) and ..(double period) |
| ls -1                                       | Output the list of files in one entry per line format        |
| ls -F                                       | Display a / (slash) immediately after each path that is a directory, * (asterisk) after executable programs or scripts, and @ after a symbolic link |
| ls -S                                       | Sort files or entries by size                                |
| ls -l                                       | List in a long format. Includes file mode, owner and group name, date and time file was modified, pathname, and more |
| ls -l /                                     | List of the file system from root with symbolic links        |
| ls -lt                                      | List the files sorted by time modified (most recent first)   |
| ls -lh                                      | Long listing with human readable file sizes in KB, MB, or GB |
| ls -lo                                      | List the file names with size, owner, and flags              |
| ls -la                                      | List detailed directory contents, including hidden files     |
| **File Size and Disk Space**                |                                                              |
| du                                          | List usage for each subdirectory and its contents            |
| du -sh [folder]                             | Human readable output of all files in a directory            |
| du -s                                       | Display an entry for each specified file                     |
| du -sk* \| sort -nr                         | List files and folders, totaling the size including the subfolders. Replace sk* with sm* to list directories in MB |
| df -h                                       | Calculate your system's free disk space                      |
| df -H                                       | Calculate free disk space in powers of 1,000 (as opposed to 1,024) |
| **File and Directory Management**           |                                                              |
| `mkdir <dir>`                               | Create new folder named `<dir>`                              |
| `mkdir -p <dir>/<dir>`                      | Create nested folders                                        |
| `mkdir <dir1> <dir2> <dir3>`                | Create several folders at once                               |
| `mkdir "<dir>"`                             | Create a folder with a space in the filename                 |
| `rmdir <dir>`                               | Delete a folder (only works on empty folders)                |
| `rm -R <dir>`                               | Delete a folder and its contents                             |
| `touch <file>`                              | Create a new file without any extension                      |
| `cp <file> <dir>`                           | Copy a file to the folder                                    |
| `cp <file> <newfile>`                       | Copy a file to the current folder                            |
| `cp <file>~/<dir>/<newfile>`                | Copy a file to the folder and rename the copied file         |
| `cp -R <dir> <"new dir">`                   | Copy a folder to a new folder with spaces in the filename    |
| `cp -i <file><dir>`                         | Prompts you before copying a file with a warning overwrite message |
| `cp <file1> <file2> <file3>/Users/<dir>`    | Copy multiple files to a folder                              |
| ditto -V [folder path][new folder]          | Copy the contents of a folder to new folder. In here "-V" print a line of status for every file copied |
| `rm <file>`                                 | Delete a file (This deletes the file permanently; use with caution.) |
| `rm -i <file>`                              | Delete a file only when you give confirmation                |
| `rm -f <file>`                              | Force removal without confirmation                           |
| `rm <file1> <file2> <file3>`                | Delete multiple files without any confirmation               |
| `mv <file> <newfilename>`                   | Move/rename                                                  |
| `mv <file> <dir>`                           | Move a file to the folder, possibly by overwriting an existing file |
| `mv -i <file> <dir>`                        | Optional -i flag to warn you before overwriting the file     |
| `mv *.png ~/<dir>`                          | Move all PNG files from current folder to a different folder |
| **Command History**                         |                                                              |
| Ctrl + R                                    | Search through previously used commands                      |
| history n                                   | Shows the previous commands you've typed. Add a number to limit to the last n items |
| ![value]                                    | Execute the last command typed that starts with a value      |
| !!                                          | Execute the last command typed                               |
| **Permissions**                             |                                                              |
| ls -ld                                      | Display the default permission for a home directory          |
| ls -ld/`<dir>`                              | Display the read, write, and access permission of a particular folder |
| chmod 755 `<file>`                          | Change the permission of a file to 755                       |
| chmod -R 600 `<dir>`                        | Change the permission of a folder (and its contents) to 600  |
| chown` <user>`:`<group> ` `<file>`          | Change the ownership of a file to user and group. Add -R to include folder contents |
| **Processes**                               |                                                              |
| ps -ax                                      | Output currently running processes. Here, a shows processes from all users and x shows processes that are not connected with the Terminal |
| ps -aux                                     | Shows all the processes with %cpu, %mem, page in, PID, and command |
| top                                         | Display live information about currently running processes   |
| top -ocpu -s 5                              | Display processes sorted by CPU usage, updating every 5 seconds |
| top -o rsize                                | Sort top by memory usage                                     |
| kill PID                                    | Quit process with ID `<PID>`. You'll see PID as a column in the Activity Monitor |
| ps -ax \| grep `<appname>`                  | Find a process by name or PID                                |
| **Network**                                 |                                                              |
| ping `<host>`                               | Ping host and display status                                 |
| whois `<domain>`                            | Output whois info for a domain                               |
| curl -O <url/to/file>                       | Download file via HTTP, HTTPS, or FTP                        |
| ssh `<username>`@`<host>`                   | Establish SSH connection to `<host>` with user `<username>`  |
| scp` <file>` `<user>`@`<host>`:/remote/path | `Copy ` `<file>` to a remote` <host>`                        |
| arp -a                                      | View a list of all devices on your local network. It will show you the IP and MAC address of all the devices |
| ifconfig en0                                | View your device IP and MAC address                          |
| traceroute [hostname]                       | Identify the path and the hops traversed by the packets from your device to the destination address |
| **Homebrew**                                |                                                              |
| brew doctor                                 | Check brew for potential problems                            |
| brew help                                   | List of useful homebrew formula and cask commands            |
| brew install `<formula>`\|`<cask>`          | Install a formula or cask                                    |
| brew uninstall `<formula>`\|cask>           | Uninstall a formula or cask                                  |
| brew list --formula                         | List only installed formulas                                 |
| brew list --cask                            | List only installed cask                                     |
| brew deps `<formula>`\|`<cask>`             | List all the dependencies of a formula or cask               |
| brew search text\|/regex/                   | Search formula or cask through regex                         |
| brew upgrade `<formula>`\|`<cask>`          | Upgrade the formula or cask                                  |
| brew outdated `<formula>`\|`<cask>`         | Search for outdated formula or cask                          |
| brew outdated --formula                     | Search for outdated formula                                  |
| brew outdated --cask                        | Search for outdated cask                                     |
| brew pin [installed_formula]                | Pin a formula from getting upgraded                          |
| brew unpin [installed_formula]              | Unpin to upgrade a package                                   |
| brew cleanup                                | Remove stale lock files and outdated packages for all formula and casks. |
| **Environment Variable or Path**            |                                                              |
| printenv                                    | Display a list of currently set environment variables. Also tells you which shell you're using |
| $echo                                       | Tells the terminal to print something and show it to you     |
| echo $PATH                                  | Check the value of the PATH variable which storea a list of directories with executable files |
| echo $PATH >path.txt                        | Export the path directory to a text file                     |
| export PATH=$PATH:absolute/path to/program/ | Execute a program via terminal only in your current session. If you use a program regularly, add the path to shell configuration file. |
| **Search**                                  |                                                              |
| find` <dir> `-name <"file">                 | Find all files named `<file>` inside `<dir>`. Use wildcards (*) to search for parts of filenames |
| grep "`<text>`" `<file>`                    | Output all occurrences of `<text> `inside` <file> `(add -i for case insensitivity) |
| grep -rl "`<text>`" `<dir>`                 | Search for all files containing `<text>` inside `<dir>`      |
| **Output**                                  |                                                              |
| cat `<file>`                                | Output the content of `<file>`                               |
| less `<file>`                               | Output the contents of `<file>` using the less command that supports pagination and more |
| head `<file>`                               | Output the first 10 lines of `<file>`                        |
| `<cmd> > > <file>`                          | Appends the output of `<cmd>` to `<file>`                    |
| `<cmd> > <file>`                            | Direct the output of` <cmd> into ` `<file>`                  |
| `<cmd1> | <cmd2>`                           | Direct the output of `<cmd1>` to  `<cmd2>`                   |
