
const navigationLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");



navigationLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

console.log("Portfolio iniciado.");
console.log("JavaScript carregado com sucesso.");
// ========================================
// PORTFOLIO - JAVASCRIPT
// ========================================


// ========================================
// NEURAL NETWORK
// ========================================

const canvas = document.getElementById("neural-network");
const ctx = canvas.getContext("2d");


// ========================================
// CANVAS SIZE
// ========================================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ========================================
// TEST
// ========================================

console.log("Canvas encontrado:", canvas);
console.log("Contexto:", ctx);
// ========================================
// NEURAL NETWORK - NODES
// ========================================

const nodes = [];

const numberOfNodes = 80;

for (let i = 0; i < numberOfNodes; i++) {

    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
    });

}

console.log("Nós criados:", nodes);
// ========================================
// NEURAL NETWORK - DRAW NODES
// ========================================

function drawNodes() {

    nodes.forEach(node => {

        ctx.beginPath();

        ctx.arc(
            node.x,
            node.y,
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#00FF88";

        ctx.fill();

    });

}
// ========================================
// NEURAL NETWORK - DRAW CONNECTIONS
// ========================================

function drawConnections() {

    const connectionDistance = 150;

    for (let i = 0; i < nodes.length; i++) {

        for (let j = i + 1; j < nodes.length; j++) {

            const nodeA = nodes[i];
            const nodeB = nodes[j];

            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;

            const distance = Math.sqrt(
                dx * dx + dy * dy
            );

            if (distance < connectionDistance) {

                ctx.beginPath();

                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);

                ctx.strokeStyle = "rgba(0, 255, 136, 0.15)";
                ctx.lineWidth = 1;

                ctx.stroke();
            }
        }
    }
}
// ========================================
// NEURAL NETWORK - MOVE NODES
// ========================================

function moveNodes() {

    nodes.forEach(node => {

        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= canvas.width) {
            node.vx *= -1;
        }

        if (node.y <= 0 || node.y >= canvas.height) {
            node.vy *= -1;
        }

    });

}
// ========================================
// ANIMATION
// ========================================

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    moveNodes();
    drawConnections();
    drawNodes();

    requestAnimationFrame(animate);
}

animate();
// ========================================
// TERMINAL
// ========================================

  // ========================================
// TERMINAL - TYPING EFFECT
// ========================================

const terminal = document.querySelector("#home > div:last-child");

const terminalLines = terminal.querySelectorAll("p");

const terminalTexts = [];

terminalLines.forEach(line => {

    terminalTexts.push(line.textContent);

    line.textContent = "";

});


// ========================================
// TYPE LINE
// ========================================

async function typeLine(line, text) {

    for (let i = 0; i < text.length; i++) {

        line.textContent += text[i];

        await new Promise(resolve => {
            setTimeout(resolve, 40);
        });

    }

}


// ========================================
// START TERMINAL
// ========================================

async function startTerminal() {

    for (let i = 0; i < terminalLines.length; i++) {

        await typeLine(
            terminalLines[i],
            terminalTexts[i]
        );

        await new Promise(resolve => {
            setTimeout(resolve, 300);
        });

    }

}

startTerminal();