export const FEATURED_SLUGS = ['htb-nibbles', 'uw-stout-2025', 'oski'] as const;

export interface Writeup {
  slug: string;
  title: string;
  description: string;
  date: string;
  platform: string;
  tags: string[];
  image: string;
  contentFile?: string;
}

export const WRITEUPS: Writeup[] = [
  {
    slug: 'htb-meow',
    title: "HackTheBox: Meow Walkthrough",
    description: "Easy rated Linux machine. Covers VPN setup, nmap, and Telnet. Root access via default blank password on Telnet. Basic linux commands to view flag.txt file.",
    date: "July 11, 2025",
    platform: "HackTheBox",
    tags: ["Red Team", "Walkthrough"],
    image: "/assets/writeups/htb-meow/image.png",
    contentFile: "htb-meow.md",
  },
  {
    slug: 'htb-nibbles',
    title: "HackTheBox: Nibbles Walkthrough",
    description: "Easy rated Linux box showcasing basic enumeration tactics, web application exploitation, and identifying file misconfigurations to escalate user privileges",
    date: "July 16, 2025",
    platform: "HackTheBox",
    tags: ["Web Exploitation", "Privilege Escalation", "Red Team", "Walkthrough"],
    image: "/assets/nibbles.png",
    contentFile: "htb-nibbles.md",
  },
  {
    slug: 'uw-stout-2025',
    title: "7th Place in UW-Stout's Cyber CTF 2025",
    description: "Breakdown of UW-Stout's CTF challenges and key takeaways that came from such challenges.",
    date: "Dec 20, 2025",
    platform: "Competition",
    tags: ["CTF", "Reverse Engineering", "OSINT", "Cryptography"],
    image: "/assets/writeups/uw-stout-2025/JM17.png",
    contentFile: "uw-stout-2025.md",
  },
  {
    slug: 'oski',
    title: "CyberDefenders: Oski Lab Writeup",
    description: "Analyzed an MD5 hash of a malicious file using sandbox reports. Extracted vital information and mapped identified behaviors to MITRE ATT&CK techniques.",
    date: "Dec 05, 2025",
    platform: "CyberDefenders",
    tags: ["Malware Analysis", "Blue Team", "Reverse Engineering"],
    image: "/assets/oski.webp",
    contentFile: "oski-analysis.md",
  },
  {
    slug: 'phishnet',
    title: "HackTheBox: PhishNet Sherlock Writeup",
    description: "Email header and attachment analysis of a phishing email. Analyzed email headers and malicious attachments. Associated technique to its respective MITRE ATT&CK technique.",
    date: "March 4, 2026",
    platform: "HackTheBox",
    tags: ["Blue Team", "Walkthrough"],
    image: "/assets/writeups/phishnet/image.png",
    contentFile: "phishnet.md",
  },
  {
    slug: 'letsdefend-bash-script',
    title: "LetsDefend: Bash Script Challenge",
    description:
      "Walkthrough of a suspicious YARN script: tracing environment variables and log paths, then following a chained download, a base64-decoded payload, and the remote staging IP.",
    date: "March 27, 2026",
    platform: "LetsDefend",
    tags: ["Blue Team", "Malware Analysis", "Walkthrough"],
    image: "/assets/writeups/letsdefend-bash-script/thumbnail.png",
    contentFile: "letsdefend-bash-script.md",
  },
];

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return WRITEUPS.find((w) => w.slug === slug);
}

export function getFeaturedWriteups(): Writeup[] {
  return FEATURED_SLUGS.map((slug) => getWriteupBySlug(slug)).filter(
    (w): w is Writeup => w !== undefined
  );
}
