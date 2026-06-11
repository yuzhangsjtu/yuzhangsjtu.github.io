---
title: "The Mac Terminal Commands Cheat Sheet"
date: 2023-02-15T14:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["Shortcuts"]
summary: "A cheat sheet for operations in the Mac terminal!"
---

#### Answer from ChatGPT:

> On macOS, the Terminal is an extremely useful tool that lets you accomplish all sorts of tasks via the command line. Here are some commonly used commands:
>
> 1. `ls`: lists the files and folders in the current directory.
> 2. `cd`: changes the current directory to a specified one, e.g. `cd Documents`.
> 3. `mkdir`: creates a new directory, e.g. `mkdir new_folder`.
> 4. `touch`: creates a new file, e.g. `touch new_file.txt`.
> 5. `rm`: deletes a file or directory, e.g. `rm file.txt` or `rm -r folder` (deletes a directory and its contents).
> 6. `cp`: copies a file or directory, e.g. `cp file.txt folder` (copies the file into the folder).
> 7. `mv`: moves a file or directory, e.g. `mv file.txt folder` (moves the file into the folder).
> 8. `cat`: displays the contents of a file, e.g. `cat file.txt`.
> 9. `echo`: outputs the specified text in the terminal, e.g. `echo "Hello, World!"`.
> 10. `grep`: searches for a specified string within a file, e.g. `grep "search_term" file.txt`.
>
> There are many other commands available; these are just a few common examples. To learn more commands, you can type the `man` command in the terminal to view a command's help documentation. For example, to view the help documentation for the `ls` command, type `man ls` in the terminal.

<br/>

#### Answer from New Bing:

> Hello, this is Bing. I found some web pages that can help you learn about Terminal commands on a Mac. You can refer to the following search results:
>
> - [1](https://www.cnblogs.com/abeen/p/4104158.html) Mac OS Terminal 几个快捷键 - ABeen - 博客园
> - [2](https://www.cnblogs.com/favana/p/5545132.html) Mac上简单常用Terminal命令 - favana - 博客园
> - [3](https://blog.csdn.net/a11101171/article/details/52239467) mac常用Terminal命令與快捷鍵參考_a11101171的博客-CSDN博客
> - [4](https://www.jianshu.com/p/97c0f76ee09a) Mac Terminal 终端常用命令总结 - 简书
> - [5](https://www.cnblogs.com/yong001/p/12052453.html) 在Mac上打开终端的7种简单方法 - 余生不见空 - 博客园
> - [6](https://support.apple.com/zh-cn/guide/terminal/apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac) 在 Mac 上的“终端”中执行命令和运行工具 - 官方 Apple 支持 (中国)
>
> In addition, I also found an English Terminal commands cheat sheet[7](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/#:~:text=The Mac Terminal Commands Cheat Sheet  ,you're current ...  46 more rows ) that you can use to reference some commonly used commands and operations. Here are some examples:
>
> - Tab: auto-complete file and folder names
> - Ctrl + A: move the cursor to the beginning of the line
> - Ctrl + E: move the cursor to the end of the line
> - Ctrl + L: clear the screen
> - Ctrl + R: search through previously used commands
> - Ctrl + C: interrupt the current command
> - Ctrl + D: exit the Terminal, same as the exit command
> - Ctrl + Z: suspend the current command
> - cd: enter a particular file path
> - pwd: show the current file path
> - ls: list the files and folders in the current folder
> - cp: copy a file or folder
> - mv: move or rename a file or folder
> - rm: delete a file or folder
> - mkdir: create a new folder
> - rmdir: delete an empty folder
> - touch: create a new empty file
> - cat: view or merge the contents of files
> - echo: display a line of text or the value of a variable
> - ping: test a network connection
> - curl: download a file from the internet
> - ssh: connect to a remote server via a secure shell
> - scp: copy a file to a remote server via a secure shell
> - man: display the manual page for a command
> - help: display the help information for a command
> - history: display the command history
> - clear: clear the screen
> - exit: exit the Terminal
>
> I hope you find this information useful. 😊

<br/>

#### The following is reproduced from: [The Mac Terminal Commands Cheat Sheet](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

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
