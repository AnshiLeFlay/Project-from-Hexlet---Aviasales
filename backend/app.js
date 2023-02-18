const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 80;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);

const dotenv = require("dotenv");
const { Pool } = require("pg");
dotenv.config();

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

const checkEmail = (request, response) => {
    const email = request.params.email;

    pool.query(
        "SELECT * FROM public.emails WHERE email=$1 LIMIT 1",
        [email],
        (error, results) => {
            if (error) {
                response.status(200).json({ success: false, message: error });
                //throw error;
            }
            if (results.rows[0] !== undefined)
                response
                    .status(200)
                    .json({ success: true, message: results.rows });
            else response.status(200).json({ success: true, message: "none" });
        }
    );
};

const saveEmail = (request, response) => {
    const email = request.body?.email;

    //we dont check if email exist
    //its a simple version of API

    if (email !== undefined)
        pool.query(
            "INSERT INTO public.emails (email) VALUES ($1) RETURNING id",
            [email],
            (error, results) => {
                if (error) {
                    response
                        .status(201)
                        .json({ success: false, message: error });
                    //throw error;
                }
                if (results.rows[0] !== undefined)
                    response
                        .status(201)
                        .json({ success: true, message: results.rows });
                else
                    response
                        .status(201)
                        .json({ success: false, message: "error" });
            }
        );
};

app.get("/endpoint/emails/:email", checkEmail);

app.post("/endpoint/emails/", saveEmail);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
