/*let myObject = {
    'name':'Flo',
    'age':45,
    'job1': {
        'name':'Dev Mentor',
        'company':{
            'name':'Dev Mentor',
            'company':'DA'
        },
    },
    'goo_guy':true,

};

console.table(myObject);

let objKey = 'job' +1
console.log(myObject[objKey]);




let myObject1 = {
    'name':'Flo',
    'age':45,
    'logJob': function (number){
        console.log('Dev-Mentor' + number)
    },
    'goo_guy':true,
};
console.table(myObject1);

myObject1.logJob(555)

let myObject2 = {
    'name':'Flo',
    'age':45,
    'job':'Dev Mentor',
    'goo_guy':true,
};

let objKeys = Object.keys(myObject2);

let ourArray = []

for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject2[objKeys[i]])
}

console.log(ourArray)
*/

let myObjectArr = [
    {
        "name":"Max",
        "is_a_good_guy": true
    },
    {
        "name":"Peter",
        "is_a_good_guy": false
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true
    },
    {
        "name":"justus",
        "is_a_good_guy": true
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false
    }

];

console.log(
    myObjectArr.filter((element) => {return element['is_a_good_guy'] == true})
);
