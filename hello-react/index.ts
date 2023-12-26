console.log('this is for Type Script Testing')
interface User{
    name:string;
    id:number;
    isAdmin:boolean;
}
console.log("mid")

let newUser: User = {
    name:'Ahmad',
    id:1,
    isAdmin:false
}

let fname:any = "hello";
fname = 42;
fname =false;

function printHello(): void{
    console.log("Hello !");
}
printHello();

function addUser(user: User) : string {
    return user.name+ "added successfully";
}

let userName = "Dr. Ahmad";
let userID = 10;
let uniqueID = userName + userID;

let projectId: number[] = [1,2,3,4,5];
let taskList: string[] = ["Ahmad","Jamal"];


projectId[2] =10;
console.log(projectId[2]);

let user: [string,string] = ["kamal","kuwar"]

let [username,password] = user;

console.log(username);
console.log("----------------------------------------------------------");

interface MyUser {
    name: string;
    id:number;
    greet():string;
}


const user1: MyUser = {
    name:"Dr. Ahmad",
    id:3,
    greet(){
        return `hello my name is ${this.name}`;
    }
}
console.log(user1.greet());

const user2: MyUser = {
    name:"k",
    id:4,
    greet(){
        return 'hi';
    }
}

interface GetGreetingFn {
    (user3: MyUser): string;
}

const getGreeting: GetGreetingFn = (user2: MyUser)=>{
    return user2.greet();
};

console.log(getGreeting(user2));


interface Employee extends MyUser{
    salary:number;
}

class Manager implements Employee{
    name: string;
    id: number;
    salary: number;

    constructor(name:string, id:number, salary:number){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    greet() {
        return `Hi, my name is ${this.name} and I am the senior manager`;
    }   
}

const manager = new Manager('Bob',4,50000);
console.log(getGreeting(manager));