/* ==================================================
   TOUCH + MOUSE PARALLAX TILT (100% RELIABLE)
================================================== */
const card = document.querySelector('.card');

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

function animateTilt() {
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  card.style.transform = `
    rotateX(${currentX}deg)
    rotateY(${currentY}deg)
    scale(1.03)
  `;

  requestAnimationFrame(animateTilt);
}

/* Touch (Mobile) */
document.addEventListener('touchmove', (e) => {
  if (!e.touches[0]) return;

  const touch = e.touches[0];
  const x = touch.clientX / window.innerWidth - 0.5;
  const y = touch.clientY / window.innerHeight - 0.5;

  targetX = -y * 10;
  targetY = x * 10;
});

document.addEventListener('touchend', () => {
  targetX = 0;
  targetY = 0;
});

/* Mouse (Desktop – subtle) */
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  targetX = -y * 6;
  targetY = x * 6;
});

document.addEventListener('mouseleave', () => {
  targetX = 0;
  targetY = 0;
});

animateTilt();

/* ==================================================
   PARTICLE NETWORK BACKGROUND
================================================== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.r = 1.5;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.strokeStyle = `rgba(147,51,234,${1 - dist / 120})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  connectParticles();
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animateParticles();
