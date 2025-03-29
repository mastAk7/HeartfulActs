import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the Express app
const app = express();

// Configure Express
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/donate", (req, res) => {
    res.render("donate.ejs");
});

app.get("/volunteer", (req, res) => {
    res.render("volunteer.ejs");
});

// Local development server
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
}

// Export for Vercel
export default app;