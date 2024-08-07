const LINKEDIN = "https://www.linkedin.com/in/rhea-rajput";
const GITHUB = "https://github.com/Rhea212";
const EMAIL = 'rheaprajput@gmail.com';
const THM = "https://tryhackme.com/p/rhea212";
const MEDIUM = "https://medium.com/@rhea212";
const OWASP = "https://owasp.org/www-chapter-thakur-college-of-engineering-and-technology/";
const HTB = "https://app.hackthebox.com/profile/1544251";

const WHOIS = [
  "<br>",
  "I'm Rhea, a third year Computer Science and Engineering student",
  "with a passion for Cybersecurity!",
  "                            ",
  "My love for examining weaknesses runs deep. I'm constantly ", 
  "honing my skills in Ethical Hacking, Vulnerability Assessment, ",
  "and Penetration Testing primarily through CTFs (Capture the Flag",
  " events), which keep me engaged and inspired!", 
  "                             ",
  "Ever since I started considering cybersecuity as my career, I",
  "felt a lack of focus and awareness about it in terms of college",
  "activities and initiatives. This led to the establishment of the",
  "OWASP Student Chapter in my college, an initiative taken and",
  "currently being led by my friends and I. Ours is the first such",
  "chapter of OWASP in Mumbai and we conduct practical sessions,",
  "including CTFs.",
  "Check out our chapter page <a href=https://owasp.org/www-chapter-thakur-college-of-engineering-and-technology/ target=blank>here</a>!",
  "                            ",
  "I find joy in constantly learning new things and tackling",
  "challenges with creativity and innovation. This helps me stay on",
  "my toes.",
  "                                     ",
  "As I approach the final year of my degree, I'm eager to explore",
  "opportunities that help me utilise my passion in real-world",
  "scenarios.", 
  "<br>"
];

WHOAMI=[
  "<br>",
  "Who am I? A question whispered by the wind,",
  "carried across the sands of time.",
  "Are you the sum of your experiences,",
  "or the echo of your dreams?",
  "Perhaps you're just a fleeting thought",
  "in the universe's mind.",
  "<br>"
];

PROFILES = [
  "<br>",
  'LinkedIn       <a href="' + LINKEDIN + '" target="_blank">linkedin/' + 'rhea-rajput' + "</a>",
  'Hack The Box   <a href="' + HTB + '" target="_blank">hackthebox/' + '4nonym0us3' + "</a>",
  'GitHub         <a href="' + GITHUB + '" target="_blank">github/' + 'Rhea212' + "</a>",
  'Medium         <a href="' + MEDIUM + '" target="_blank">medium/' + 'rhea212' + "</a> (I post writeups)",
  'Try Hack Me    <a href="' + THM + '" target="_blank">tryhackme/' + 'rhea212' + "</a>",
  "<br>"

];

PROJECTS = [
  "<br>",
  "<strong> - Sniffy -  Packet Dissector <strong>",
  "Tech Stack Used: Python",
  "Sniffy is a command-line tool capable of packet capturing, display, filtering and dissection.",
  "It utilises the Scapy python library to perform packet manipulation. The interface for packet",
  "capture is chosen, after which the network traffic is displayed on the screen in tabular format", 
  "showing the protocol, source and destination addresses, content length and payload of the packets.",
  "The traffic is also colour-coded as follows:",
  " - <font color='#01c0f4'>Blue</font> for management related traffic like ARP packets",
  " - <font color='#05f19b'>Green</font> for TCP packets that have a payload",
  " - <font color='#fa313b'>Red</font> for HTTP traffic",
  "Once the capturing is stopped, one can choose to either:",
  " - view the dissection of an individual packet according to the layers of the TCP/IP model or", 
  " - filter the traffic",
"Through the dissection, one can view all the headers of each layer of the model, and the raw and",
"ASCII-decoded payload.",
"Filtering can be done on 3 criteria - source address, destination address, and protocol.",
  "<a href=https://github.com/Rhea212/sniffy-pkt-dissector target=blank> GitHub link</a>",
  "<br>",
];

COMMAND_LIST = [
  "<br>",
  '<span class="command">whois</span>          Learn about me',
  '<span class="command">whoami</span>         Learn about yourself',
  '<span class="command">profiles</span>       Checkout some of my public profiles',
  '<span class="command">projects</span>       View my projects',
  '<span class="command">resume</span>         View my resume',
  '<span class="command">email</span>          Feel free to reach out',
  '<span class="command">shibe</span>          See a random shiba dog pic cause why not?',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">history</span>        Show command history',
  '<span class="command">echo</span>           Print any given string',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">help</span>           View this guide',
  "<br>",
];
BANNER = [

  "                                                                                                   .''.",
  "       .''.                                                                                       :_\\/_:     .",
  "      :_\\/_:   .               *''*                                                               : /\\ :  .'.:.'.",
  "  .''.: /\\ : _\\(/_         .:.*_\\/_*                                                            :  '..'.  -=:o:=-                  ",
  " :_\\/_:'.:::. /)\\ *''* .|. ':'* /\\ *                                                         '.\\'/.'_\\(/_ '.':'.'              ",
  " : /\\ : :::::  ' *_\\/_*| |     *..*                                                          -= o =- /)\\     '   *      ",     
  "  '..'  ':::'    * /\\ *|'|       ____  __                  ____          _             __    .'/.\\'. ._____         ",    
  "     *         ___*..*|  |      / __ \\/ /_  ___  ____ _   / __ \\____ _  (_)___  __  __/ /_      :    |.   |' .---\"|",
  "       _*   .-'   '-. |  |     / /_/ / __ \\/ _ \\/ __ `/  / /_/ / __ `/ / / __ \\/ / / / __/    .--'|  ||   | _|    |",
  "    .-'|  _.|  |    ||   '-__ /_/ |_/_/ /_/\\___/\\__,_/  /_/ |_|\\__,_/_/ / .___/\\__,_/\\__/ __  |   |  |    ||      |",
  "    |' | |.    |    ||                                             /___/_/                  | |   |  |    ||      |",
  " ___|  '-'     '    \"\"                                                                       '-'   '-.'    '`      |____ ",
  "rpr~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  
  ];

EMAIL_INFO = [
  "                 ",
  "✉️ " + "<a href=mailto:" + EMAIL + ">" + EMAIL +"</a>",
  "                  "
]

SUDO = [
"                                                                ",
"Only rhea has <span class=\"command\">admin</span> privileges :)",
"                                                                "
]

TERMINAL_INFO = [
'Welcome to my interactive web terminal portfolio!',
"For a list of available commands, type <span class=\"command\">'help'</span>."
]

TERMINAL_INFO_MOBILE = [
  'Welcome to my terminal web portfolio!',
  "                                 ",
  "For a list of available commands,", 
  "type <span class=\"command\">'help'</span>.",
  "                                          ",
  "Version (1.0)",
  "                                          "
  ]

MOBILE_BANNER = [
" ____  __                  ____          _             __  ",
" / __ \\/ /_  ___  ____ _   / __ \\____ _  (_)___  __  __/ /_",
"/ /_/ / __ \\/ _ \\/ __ `/  / /_/ / __ `/ / / __ \\/ / / / __/",
"/_/ |_/_/ /_/\\___/\\__,_/  /_/ |_|\\__,_/_/ / .___/\\__,_/\\__/",
"                       /_/                                ® 2024",
]
