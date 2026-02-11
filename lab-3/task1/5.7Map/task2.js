function filterAnagrams(words) {
    let m = new Map()

    for (let word of words ) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted , word)
    }

    return Array.from(map.values)
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(filterAnagrams(arr));

