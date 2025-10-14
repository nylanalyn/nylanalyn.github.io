// Electric Dreams: A Text Adventure
// Follow the white rabbit...

const story = {
    start: {
        text: [
            "SYSTEM INITIALIZING...",
            "CONNECTION ESTABLISHED",
            "",
            "You followed the white rabbit.",
            "",
            "The screen flickers. Green text materializes against the void.",
            "You find yourself jacked into an old BBS system, forgotten by time.",
            "The year is 1999... or is it? The timestamp flickers: 2025... 1999... ERROR.",
            "",
            "A message appears:",
            "",
            "\"Welcome to ELECTRIC DREAMS BBS\"",
            "\"Your nostalgia has led you here.\"",
            "\"Navigate the neon-lit streets of memory.\"",
            "",
            "Before you, three paths shimmer into existence:",
            ""
        ],
        choices: [
            { text: "[1] Enter the NEON DISTRICT - A maze of data and light", next: "neon_district" },
            { text: "[2] Access the FORGOTTEN ARCHIVES - Old files, older secrets", next: "archives" },
            { text: "[3] Connect to THE VOID - Where lost connections go", next: "void" }
        ]
    },

    neon_district: {
        text: [
            "",
            "> Entering NEON DISTRICT...",
            "",
            "The screen explodes into cascading colors. Cyan, magenta, electric purple.",
            "You're standing on a rain-slicked virtual street.",
            "Holographic advertisements flicker: \"REMEMBER WHEN CODE WAS POETRY?\"",
            "",
            "A figure materializes - an old avatar, pixelated and glitching.",
            "\"I've been waiting,\" it says. \"Do you remember the old ways?",
            "When we built worlds with nothing but text and imagination?\"",
            "",
            "The avatar points to two doorways of light:",
            ""
        ],
        choices: [
            { text: "[1] Follow the avatar deeper into nostalgia", next: "deep_nostalgia" },
            { text: "[2] Hack the advertisement systems", next: "hack_ads" },
            { text: "[3] Return to the beginning", next: "start" }
        ]
    },

    archives: {
        text: [
            "",
            "> Accessing FORGOTTEN ARCHIVES...",
            "",
            "Dust motes dance in beams of light. Digital dust.",
            "Directories stretch infinitely: /memories/1995, /dreams/2001, /regrets/????",
            "",
            "You find a file: README.TXT",
            "You open it:",
            "",
            "\"If you're reading this, you felt the pull too.\"",
            "\"The warm glow of CRT monitors. The sound of dial-up.\"",
            "\"We stored our dreams in bits and bytes.\"",
            "\"Some of us never left.\"",
            "",
            "A cursor blinks. Waiting.",
            ""
        ],
        choices: [
            { text: "[1] Search for your own files", next: "own_files" },
            { text: "[2] Run MEMORIES.EXE", next: "memories" },
            { text: "[3] Return to the beginning", next: "start" }
        ]
    },

    void: {
        text: [
            "",
            "> Connecting to THE VOID...",
            "",
            "Everything goes dark. Not the absence of light.",
            "The presence of nothing.",
            "",
            "Then... a single green cursor blinks.",
            "",
            "Text appears, one character at a time:",
            "",
            "\"You found the quiet place.\"",
            "\"Where the internet is silent.\"",
            "\"Where thoughts echo without social media.\"",
            "\"Where we used to gather, just to... be.\"",
            "",
            "The void asks you a question:",
            "\"What do you miss most about the old web?\"",
            "",
            "(Type your answer, or choose a path)",
            ""
        ],
        choices: [
            { text: "[1] \"The creativity and weirdness\"", next: "creativity" },
            { text: "[2] \"The genuine connections\"", next: "connections" },
            { text: "[3] \"The feeling of discovery\"", next: "discovery" },
            { text: "[4] Return to the beginning", next: "start" }
        ]
    },

    deep_nostalgia: {
        text: [
            "",
            "> Following the avatar...",
            "",
            "You walk through corridors of memory.",
            "GeoCities pages. Blinking text. Under construction GIFs.",
            "A webring that goes in circles forever.",
            "",
            "The avatar stops. Turns.",
            "\"We thought it would last forever. Our little corners of the web.\"",
            "\"Then everything got... optimized. Monetized. Sanitized.\"",
            "",
            "\"But here, in the electric dreams, it still exists.\"",
            "\"Every weird personal site. Every experimental layout.\"",
            "\"Every honest thought, unedited by algorithm.\"",
            "",
            "The avatar smiles (you can tell, even through the pixels).",
            "\"Keep building. Keep dreaming.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    hack_ads: {
        text: [
            "",
            "> Hacking advertisement matrix...",
            "",
            "Your fingers fly across the terminal.",
            "The holographic ads glitch. Their messages change:",
            "",
            "\"REMEMBER: YOU ARE MORE THAN YOUR ENGAGEMENT METRICS\"",
            "\"NOSTALGIA IS VALID BUT THE FUTURE IS UNWRITTEN\"",
            "\"MAKE WEIRD STUFF. NOBODY'S WATCHING (IN A GOOD WAY)\"",
            "",
            "The avatar laughs. \"Nice work. Sometimes you gotta hack",
            "your way to better messages.\"",
            "",
            "The neon district feels a little brighter.",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    own_files: {
        text: [
            "",
            "> Searching for your files...",
            "",
            "The archive knows you. Of course it does.",
            "It has everyone who ever felt this way.",
            "",
            "You find a directory: /users/you/",
            "Inside: hopes.txt, fears.doc, dreams.zip",
            "",
            "You open dreams.zip. It's full of:",
            "- Websites you wanted to build",
            "- Stories you wanted to tell",
            "- Connections you wanted to make",
            "",
            "A note appears: \"It's not too late, you know.\"",
            "\"The old web is dead. Long live the new old web.\"",
            "\"Build your corner. Make it weird. Make it yours.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    memories: {
        text: [
            "",
            "> Running MEMORIES.EXE...",
            "",
            "The program loads. Slowly. Like it's supposed to.",
            "",
            "Images flash:",
            "- The warm glow of a CRT monitor at 3am",
            "- The gentle hum of a computer fan",
            "- The sound of rain on the window",
            "- The feeling that the internet was infinite",
            "- The certainty that you'd find your people somewhere",
            "",
            "And you did. And you do. And you will.",
            "",
            "The program exits with a message:",
            "\"Memory complete. Keep making new ones.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    creativity: {
        text: [
            "",
            "The void considers your answer.",
            "",
            "\"Yes. The creativity. The weirdness.\"",
            "\"When every site was someone's unique expression.\"",
            "\"Before templates. Before frameworks decided how we think.\"",
            "",
            "\"That creativity isn't gone. It's here. In you.\"",
            "\"Every weird idea you have. Every strange layout.\"",
            "\"Every time you write for humans instead of algorithms.\"",
            "",
            "\"You're keeping it alive.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    connections: {
        text: [
            "",
            "The void warms (somehow).",
            "",
            "\"The connections. Yes.\"",
            "\"Before social media metrics. Before influencers.\"",
            "\"Just people, finding each other across the void.\"",
            "",
            "\"Those connections are still possible.\"",
            "\"They're harder to find. But they're realer.\"",
            "",
            "\"A blog post. A comment section. An email exchange.\"",
            "\"Slower. Deeper. More human.\"",
            "",
            "\"You're part of that. By being here.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    },

    discovery: {
        text: [
            "",
            "The void ripples with recognition.",
            "",
            "\"Discovery. The thrill of stumbling onto something new.\"",
            "\"A hidden page. A webring. A stranger's digital garden.\"",
            "",
            "\"That feeling isn't gone. It's just hidden.\"",
            "\"Hidden behind the algorithmic feed.\"",
            "\"Behind the recommendation engines.\"",
            "",
            "\"But when you find it - a weird personal site,\"",
            "\"a hand-coded corner of the web - it hits different.\"",
            "",
            "\"Keep exploring. Keep discovering.\"",
            "\"The weird web is still out there.\"",
            "",
            "[THE END - Thank you for following the rabbit]",
            ""
        ],
        choices: [
            { text: "[Restart your journey]", next: "start" }
        ]
    }
};

class TextAdventure {
    constructor() {
        this.overlay = document.getElementById('terminalOverlay');
        this.content = document.getElementById('terminalContent');
        this.input = document.getElementById('terminalInput');
        this.closeBtn = document.getElementById('terminalClose');
        this.rabbit = document.getElementById('whiteRabbit');

        this.currentScene = 'start';
        this.isTyping = false;

        this.init();
    }

    init() {
        // White rabbit click handler
        this.rabbit.addEventListener('click', () => {
            this.open();
        });

        // Close button handler
        this.closeBtn.addEventListener('click', () => {
            this.close();
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.close();
            }
        });

        // Input handler
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput();
            }
        });
    }

    open() {
        this.overlay.classList.add('active');
        this.currentScene = 'start';
        this.displayScene(this.currentScene);
        this.input.focus();
    }

    close() {
        this.overlay.classList.remove('active');
        this.content.innerHTML = '';
        this.input.value = '';
    }

    async displayScene(sceneId) {
        this.isTyping = true;
        this.content.innerHTML = '';
        this.input.disabled = true;

        const scene = story[sceneId];

        // Display text with typing effect
        for (let line of scene.text) {
            await this.typeLine(line);
        }

        // Display choices
        scene.choices.forEach((choice, index) => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = 'terminal-line choice';
            choiceDiv.textContent = choice.text;
            choiceDiv.dataset.next = choice.next;
            choiceDiv.addEventListener('click', () => {
                this.goToScene(choice.next);
            });
            this.content.appendChild(choiceDiv);
        });

        this.isTyping = false;
        this.input.disabled = false;
        this.input.focus();

        // Scroll to bottom
        this.content.scrollTop = this.content.scrollHeight;
    }

    async typeLine(text) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.textContent = text;
        this.content.appendChild(line);

        // Scroll to bottom
        this.content.scrollTop = this.content.scrollHeight;

        // Short delay between lines
        await this.sleep(30);
    }

    handleInput() {
        if (this.isTyping) return;

        const command = this.input.value.trim().toLowerCase();
        this.input.value = '';

        if (!command) return;

        // Display user input
        const inputLine = document.createElement('div');
        inputLine.className = 'terminal-line';
        inputLine.textContent = `> ${command}`;
        inputLine.style.color = '#00ffff';
        this.content.appendChild(inputLine);

        // Check for numeric choice
        const choice = parseInt(command);
        const scene = story[this.currentScene];

        if (choice >= 1 && choice <= scene.choices.length) {
            const nextScene = scene.choices[choice - 1].next;
            this.goToScene(nextScene);
        } else {
            // Easter egg responses to certain commands
            const responses = {
                'help': 'Choose a number from the options above, or click on a choice.',
                'exit': 'Click the × button in the top right, or press Escape.',
                'whoami': 'You are a dreamer, lost in electric nostalgia.',
                'wake up': 'But what if this is the dream you want to stay in?',
                'hello': 'Hello, traveler. Welcome to the electric dreams.',
                'hack': 'You\'re already in. What more do you want to hack?',
                'matrix': 'There is no spoon. But there is a rabbit.',
            };

            const response = responses[command] || 'Unknown command. Choose a number from the options above.';

            const responseLine = document.createElement('div');
            responseLine.className = 'terminal-line';
            responseLine.textContent = response;
            this.content.appendChild(responseLine);
        }

        this.content.scrollTop = this.content.scrollHeight;
    }

    goToScene(sceneId) {
        this.currentScene = sceneId;
        this.displayScene(sceneId);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the adventure when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TextAdventure();
});
