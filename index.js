import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended : true}))

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.get("/donate", (req,res) => {
    res.render("donate.ejs");
})

app.get("/volunteer", (req,res) => {
    res.render("volunteer.ejs");
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening on port ${port}`);
})


function loginPopup(){
    
}