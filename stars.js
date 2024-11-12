// Obtener el canvas y el contexto
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

// Establecer el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear un arreglo para almacenar las estrellas
let stars = [];

// Clase para crear estrellas
class Star {
    constructor(x, y, radius, speed, opacity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.opacity = opacity;
    }

    // Método para dibujar la estrella
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(131, 214, 247, ${this.opacity})`;
        ctx.fill();
    }

    // Método para mover la estrella
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.radius;
        }
        this.draw();
    }
}

// Función para crear estrellas aleatorias
function createStars() {
    for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 2 + 1; // Radio entre 1 y 3
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 0.5 + 0.2; // Velocidad entre 0.2 y 0.7
        const opacity = Math.random() * 0.5 + 0.3; // Opacidad entre 0.3 y 0.8

        stars.push(new Star(x, y, radius, speed, opacity));
    }
}

// Función para animar las estrellas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    for (let i = 0; i < stars.length; i++) {
        stars[i].update(); // Actualizar y dibujar las estrellas
    }
    requestAnimationFrame(animate); // Llamar a la animación nuevamente
}

// Llamar a las funciones
createStars();
animate();
