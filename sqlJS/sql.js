import mysql from "mysql";
import express from "express";

const app = express();
const conn = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "milgam_db"
};

app.get("/", (req, res)=>{
    res.send("Hello!")
})

app.listen(8080, () => {
    console.log("sheeeeeesh");
});


let connection = mysql.createConnection(conn);
connection.connect(()=>{
    console.log("nice")
})