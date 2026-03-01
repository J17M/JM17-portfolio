# 7th Place in UW-Stout's Cyber CTF 2025

![JM17.png](/assets/writeups/uw-stout-2025/JM17.png)

I participated in UW-Stout's Cyber CTF a couple of weeks ago. The competition ranged from Dec 5th to Dec 12, the peak of final exams. I was put in an uncomfortable position: participate in this CTF, or study for my finals. I did what most would do and obviously used any excuse to avoid studying (kidding, of course). I was able to manage my time efficiently between studying for my exams and participating. 

For those unfamiliar, CTFs (Capture the Flag) are cybersecurity competitions where you solve challenges across different categories to earn points. The main goal is to find a hidden flag string and climb the ranks within the allotted time.

I was impressed by the variety of challenge types These were very different from what's typically expected in a CTF. Categories ranged from web exploitation, to Linux command line tasks, to even an AWS bucket challenge. There was also a category dedicated to using CyberChef to decode some text. I enjoyed having to work step by step to get the flag. My plan, like always, was to attempt the challenges I could do and skip the ones I did not see as "easy points."

## Where I Did Well

I did very well in the Linux CLI challenges as I have a strong understanding of how to navigate the CLI and solve challenges while only relying on the command line. The web app challenges were not as difficult either. One of the challenges were a simple SQL injection and another was more of a brute force style to guess the password to an admin panel. It can be a little difficult navigating through web app challenges are there are so many possibilities for vulnerabilities. My thought process is to first determine where the attack vector is, find out different attack methods such as SQL, or XSS, and then try each until something works. Anything that gets you closer to the flag is progress, whether that be an error message that leaks information, or an unexpected behavior that differs from what you'd normally expect. 

## Where I Struggled

I definitely had a hard time with the OSINT challenges. From previous competitions, I've always struggled with challenges where you have to look through flight logs. I did a lot of googling and slowly started to narrow down my options. I remember being able to focus on a few possible candidates and from there it was just process of elimination until I got the correct answer. It wasn't the best way to get the solution, but I got it. I also struggled a little with database challenges as I've never really used sqlite3. I was able to solve a lot of those challenges, but it was a longer process since I was relatively new to it. At least now I have a better understanding of database querying that I can apply to future competitions.

## Final Thoughts

I enjoyed spending my time trying to solve as many challenges as I could. The variety in challenge types was very refreshing and I was able to learn new things. If I didn't need to also focus on studying for my finals, I'm sure I could've done a little better. Either way, I learned some new skills while sharpening what I already know, skills that I hope to apply in the next CTF I participate in.

For those that want to practice CTF skills, [PicoCTF](https://picoctf.org/) offers many archived challenges from past competitions. It is an amazing starting point for beginners that want to get into CTF competitions.
