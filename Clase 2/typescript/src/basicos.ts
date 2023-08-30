let name: string = 'Strider';
let hpPoints: number | string = 95;
const isAlive: boolean = true;

interface Character {

    name: string;
    hp: number;
    skills: string[]
    hometown?: string

}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: 'Ciudad Gotica'
}

hpPoints = 'Batman';

function addNumber(a: number, b: number): number{
    return a + b;
}

const addNumbers = (a: number, b: number) => {
    return a + b
}

function multiply(firstNumber: number, base: number = 4 ,secondNumber?: number){
    return firstNumber * base
}

export class Person{
    public name: string;
    private address: string;
    public document: number;

    constructor(
            name: string, 
            document: number,
            address: string = "No address"
        ){
            this.name = name;
            this.address = address;
            this.document = document;
    }
}

export class Hero{

    public alterEgo: string;
    public age: number;
    public person: Person;

    constructor(
        alterEgo: string, 
        age: number,
        person: Person
    ){
        this.alterEgo = alterEgo;
        this.age = age;
        this.person = person;
    }

}

export function cualEsMiTipo<T>( argumento:T ):T{
    return argumento
}

const soyUnString = cualEsMiTipo('string')
const soyUnNumero = cualEsMiTipo(1)
const soyUnArreglo = cualEsMiTipo([1,2,3, "string", true])

console.log(soyUnString.split("s"))

export {}