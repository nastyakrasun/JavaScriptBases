//1  Создайте модуль geometry.js , который экспортирует функции для вычисления площади и периметра фигур.

export function rectangleArea(length, width) {
    return length * width;
}

export function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

export function circleArea(radius) {
    return Math.PI * radius * radius;
}

export function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

export function triangleArea(base, height) {
    return 0.5 * base * height;
}

export function trianglePerimeter(a, b, c) {
    return a + b + c;
}
