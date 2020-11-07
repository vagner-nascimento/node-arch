import loadApp from "./loader"

loadApp()
    .then(() => console.info("application loaded"))
    .catch(err => {
        console.error("application error", err)
        process.exit(1)
    })
