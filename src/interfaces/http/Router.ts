import methodOverride from "method-override"
import compression from "compression"
import bodyParser from "body-parser"
import { Router } from "express"
import cors from "cors"

export default function(): Router {
    const router = Router()

    router
        .use(methodOverride("X-HTTP-Method-Override"))
        .use(bodyParser.json())
        .use(compression())
        .use(cors())

    router
        .get("/", (req, res) => {
            console.info('req params', req.params)

            res.status(200).json({ hello: "world" })
        })

    return router
}
