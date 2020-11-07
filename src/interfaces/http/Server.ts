import express from "express"

import getRouter from "./Router"

const port = 3000

export default function(): Promise<void> {
    const e = express()

    return new Promise(done => {
        e.use("/", getRouter)
            .listen(port, () => {          
                console.info(`p[${process.pid}] server listening at port ${port}`)
                
                done()
            })
    })
}
