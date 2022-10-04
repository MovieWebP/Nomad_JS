const a = 10; //value choice


function hello(anyone) {        //function
    console.log("hello"+anyone);
};

hello("yeojun");

days = [        //arrays
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];
console.log(days[4]);
days.push("sun");
console.log(days);

const player = {        //objects
    name : "yeojun",
    age : 17,
    Im : "genius"
};

console.log(player.Im);

player.hobby = "game";

console.log(player.hobby);




const calculator = {
    add : function (a,b) {
        console.log(a+b)
    },
    minus : function (a, b) {
        console.log(a-b)
    },
    devide : function (a, b) {
        console.log(a / b)
    },
    multiply : function (a,b) {
        console.log(a * b)
    }

};

calculator.add(1,2)
calculator.minus(1,2)
calculator.devide(1,2)
calculator.multiply(1,2)


