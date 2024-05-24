const express = require('express');

const server = express();

const port = 3000;



const validate = (req,res,next) => {
    const{ID, Name, Rating, Description, Genre, Cast} = req.body;
    
    if(typeof ID  !== "number" || typeof Name !== "string" || typeof Rating !== "number" || typeof Description !== "string" ||
    typeof Genre !== "string" || !Array.isArray(Cast) || !Cast.every(item => typeof item === "string")){
      return res.status(400).send("bad request. some data is incorrect.")
    }
    next();
}
 
server.use(express.json());
server.use(validate);

server.post('/',(req,res) => {
    res.status(200).send("data recieved")
})

server.listen(port, (req,res) => {
    console.log(`Server is running on port ${port}`);
})