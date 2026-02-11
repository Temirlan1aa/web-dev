function unique(arr) {
    let s = new Set() 
    let uniqueArr = [];
    for (item of arr){
        s.add(item);
    }

    for (item of s) {
        uniqueArr.push(item)
    }

    return uniqueArr;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 

console.log(unique(values))