class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        throw new Error("Метод 'sound' должен быть переопределён");
    }

    introduce() {
        console.log(`Меня зовут ${this.name}, я говорю ${this.sound()}`);
    }
}

class Dog extends Animal {
    sound() {
        return "'Гав'";
    }
}

class Cat extends Animal {
    sound() {
        return "'Мяу'";
    }
}

class Bird extends Animal {
    sound() {
        return "'Фьють'";
    }
}

export { Dog, Cat, Bird };
