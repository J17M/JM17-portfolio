# HackTheBox: Meow Walkthrough

![image.png](/assets/writeups/htb-meow/image.png)

## Task 1:  **What does the acronym VM stand for?**

### A: Virtual Machine

## Task 2: **What tool do we use to interact with the operating system in order to issue commands via the command line, such as the one to start our VPN connection? It's also known as a console or shell.**

### A: Terminal

## **Task 3: What service do we use to form our VPN connection into HTB labs?**

### A: OpenVPN

## **Task 4: What tool do we use to test our connection to the target with an ICMP echo request?**

### A: Ping

## **Task 5: What is the name of the most common tool for finding open ports on a target?**

### A: nmap

## **Task 6: What service do we identify on port 23/tcp during our scans?**

### A. Telnet

![image-1.png](/assets/writeups/htb-meow/image-1.png)

Running a basic nmap scan on the target IP shows that telnet is on port 23/tcp

## Task 7: **What username is able to log into the target over telnet with a blank password?**

We can launch a telnet connection to the target IP using `telnet [TARGET_IP]`

![image-2.png](/assets/writeups/htb-meow/image-2.png)

Telnet is highly susceptible to misconfigurations which can allow users to obtain access to administrative accounts with blank passwords

Typical administrative usernames are:

- admin
- administrator
- root

Trying each of these might result in us authenticating as an administrator  

![image-3.png](/assets/writeups/htb-meow/image-3.png)

We see that root has an empty password

### A. root

## Submit Flag:

Now that we are connected to telnet as root, we can run basic commands to look for anything that can lead us to a flag

Running `ls` lists all the files in the current directory and we can see the file `flag.txt`

Running the `cat` command will show the contents of the file which contains the flag for this machine 

![image-4.png](/assets/writeups/htb-meow/image-4.png)
