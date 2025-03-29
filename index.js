import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/donate", (req, res) => {
    res.render("donate.ejs");
});

app.get("/volunteer", (req, res) => {
    res.render("volunteer.ejs");
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`listening on port ${port}`);
    });
}

// Remove the loginPopup function - it seems to be out of place in this server file

// Export the app for Vercel
export default app; 