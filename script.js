const ideas = {
    Easy: {
        "JavaScript": [
            "Build a to-do list app",
            "Create a digital clock",
            "Make a tip calculator"
        ],
        "HTML/CSS": [
            "Design a personal portfolio page",
            "Create a pricing table layout",
            "Clone the Google homepage layout"
        ],
        "Java": [
            "Build a command-line calculator",
            "Create a simple student grade checker",
            "Make a number guessing game in the console"
        ],
        "Python": [
            "Make a basic calculator app",
            "Create a number guessing game",
            "Build a simple Mad Libs generator"
        ]
    },
    Medium: {
        "JavaScript": [
            "Create a weather app using OpenWeather API",
            "Build a Pomodoro timer",
            "Develop a quiz app with scoring"
        ],
        "HTML/CSS": [
            "Design a responsive landing page with flexbox",
            "Create a multi-section blog layout",
            "Build a portfolio site with a CSS grid gallery"
        ],
        "Java": [
            "Console-based library management system",
            "Build a simple banking app",
            "Create a ticket booking simulation"
        ],
        "Python": [
            "Build a personal expense tracker",
            "Create a basic command-line todo list app",
            "Develop a simple file organizer tool"
        ]
    },
    Hard: {
        "JavaScript": [
            "Build a Kanban board with drag-and-drop",
            "Create a full CRUD blog using Firebase",
            "Develop a multiplayer game using WebSockets"
        ],
        "HTML/CSS": [
            "Rebuild an entire product landing page (e.g. Apple.com)",
            "Create a fully responsive resume template",
            "Build a CSS-only interactive menu system"
        ],
        "Java": [
            "Build a desktop-based password manager using Swing",
            "Create a REST API using Spring Boot",
            "Develop a file encryption/decryption tool"
        ],
        "Python": [
            "Build an AI chatbot using NLP libraries",
            "Create a facial recognition app with OpenCV",
            "Develop a web scraper that runs on schedule"
        ]
    }
};


document.getElementById("generateBtn").addEventListener("click", () => {
    const difficulty = document.getElementById("difficulty").value;
    const tech = document.getElementById("tech").value;
    const output = document.getElementById("results");

    output.innerHTML = "";

    const matches = ideas[difficulty]?.[tech];

    if (!matches || matches.length === 0) {
        output.innerHTML = "<p>No ideas found for this combination.</p>";
        return;
    }

    const picked = getRandomItems(matches, 1);
    picked.forEach((idea) => {
        const p = document.createElement("p");
        p.textContent = idea;
        output.appendChild(p);
    });
});

function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, arr.length));
}

document.getElementById("themeToggle").addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
    const output = document.getElementById("results");
    output.innerHTML = "";

    const allIdeas = [];

    for (let level in ideas) {
        for (let stack in ideas[level]) {
            allIdeas.push(...ideas[level][stack]);
        }
    }

    const picked = getRandomItems(allIdeas, 1);
    const p = document.createElement("p");
    p.textContent = picked[0];
    output.appendChild(p);
});