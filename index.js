import express from "express"
import cors from "cors"
import { armstrong_checker, fetch_fact, perfect_checker, prime_checker } from "./utils.js";

const app = express();

const PORT = 5000;

app.use(cors())
app.use(express.json());

const apiPrefix = "/api"


app.get(`${apiPrefix}/ping`, (req, res) => {
    res.status(200).json({
        "status": "live",
        "response": "pong"
    })
})

app.get(`${apiPrefix}/classify-number`, async (req, res) => {
    let { number } = req.query;
    
    
    if (!number || isNaN(number)){
        return res.status(400).json({
            "number": number,
            "error": true
        });
    }
    
    number = parseInt(number);
    const properties = []

    const is_prime = prime_checker(number);
    const is_perfect = perfect_checker(number);

    armstrong_checker(number) === true && properties.push("armstrong")
    number % 2 === 0 ? properties.push("even") : properties.push("odd")

    const digit_sum = number.toString().split('').reduce((acc, num) => acc + parseInt(num), 0)
    const fun_fact = await fetch_fact(number);

    return res.json({
        "number": number,
        "is_prime": is_prime,
        "is_perfect": is_perfect,
        "properties": properties,
        "digit_sum": digit_sum,
        "fun_fact": fun_fact
    })
})

app.all("*", (req, res) => {
    res.status(404).json({
        "error": `Can't find resource "${req.originalUrl}" on this server`
    })
})


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})

export default app