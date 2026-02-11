function findMid(size) {
    if (size % 2 == 1) {
        return size/2;
    } else {
        return ((size / 2) + (size/2 + 1)) / 2;
    }
    
}

styles = ["Jazz" , "Blues"];
console.log(styles)
styles.push("Rock-n-Roll");
console.log(styles)
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles)
console.log(styles.shift());
console.log(styles)
styles.unshift("Rap" , "Reggae");
console.log(styles)
