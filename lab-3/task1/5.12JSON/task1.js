let user = {
    name : "John Smith" , 
    age : 35
}

jsonUser = JSON.stringify(user , null , 2);
console.log(jsonUser)

parsedJsonUser = JSON.parse(jsonUser);
console.log(parsedJsonUser)