function sumInput(nums) {
    let sum = 0 ;

    if (nums.length == 0) {
        return sum;
    }

    for (num of nums) {
        sum += num;
    }

    return sum;

}

let nums = [];
while(true){
    let num = prompt("Enter your number : " , 0);

    if (typeof(num) != "number") {
        sumInput()
        break;
    }
    nums.push(num);
}