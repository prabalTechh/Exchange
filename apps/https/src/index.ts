import express from "express"

const app = express();
const Port = 4040;
app.use(express());

app.listen(Port , ()=>{
    console.log("Listening to this port !! " + Port);
})