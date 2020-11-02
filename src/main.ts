import { exit } from "process"

console.info("Node TS is up")

const timeout = 3
console.info(`exiting app after ${timeout} seconds`)

let cur = 1
const id = setInterval(() => { console.log(`waiting ${cur} sec`); cur++ }, 1000)

setTimeout(() => {
    console.log(`waiting ${cur} sec`)
    console.info("exiting app")
    
    clearInterval(id)
    exit(1)
}, timeout * 1000)
