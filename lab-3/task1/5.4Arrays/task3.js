let arr = ["a" , "b"]

arr.push(function() {
    console.log(this , "\n");
})

console.log(arr[2]()) //expect undefined or nothing