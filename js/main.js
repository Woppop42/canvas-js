import { getRandomNumber, getRandomColor } from './utils/random.js';
import { Rectangle } from './classes/Rectangle.js';
import { Circle } from './classes/Circle.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const rectangle = new Rectangle(50, 50, 100, 150, "blue");
rectangle.draw(context);

const circle = new Circle(300, 200, 50, "red");
circle.draw(context);

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const radius = getRandomNumber(10, 50);
    const color = getRandomColor();

    const newCircle = new Circle(x, y, radius, color);
    newCircle.draw(context);
});


