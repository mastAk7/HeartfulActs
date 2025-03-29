import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/donate", (req, res) => {
    res.render("donate.ejs");
});

app.get("/volunteer", (req, res) => {
    res.render("volunteer.ejs");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});