function greeter(person: string) {
    return "Hello, " + person;
}

let user = 'hello ts';

document.body.innerHTML = greeter(user);
console.log(greeter(user));