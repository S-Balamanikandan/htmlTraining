let nums = [1,3,6,8,9,3,2,6,18,14];
let result={even:[],odd:[]};

for(let num of nums){
    if(num % 2==0){
        result.even.push(num);
    }else{
        result.odd.push(num);
    }
}

console.log(result);


//array sort

var names = ["Muthu","Tharu","Manoj","Prabu","Venkadesh"];

names.sort();
console.log(names)

//reverse of

var names = ["Muthu","Tharu","Manoj","Prabu","Venkadesh"];

names.reverse();
console.log(names)

//index of

var names = ["Muthu","Tharu","Manoj","Prabu","Venkadesh"];

names.indexOf();
console.log(names.indexOf("Muthu"))

