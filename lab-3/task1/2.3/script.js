"use strict"


const delay = setTimeout(() => {} , 5000)
async function func(delay) {
    return new Promise(
        delay
    )
}

func(delay)