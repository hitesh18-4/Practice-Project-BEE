// const express = require("express");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middlewares/errorHandler");
// const cors= require("cors");
// const hbs = require("hbs");
// const path = require("path");

// const users = [
//     { name: "Harman Dhiman", age: 20 },
//     { name: "Hindveer", age: 19 },
//     { name: "Jaikirat", age: 20 },
// ];
// const app = express();
// const port = process.env.PORT || 5000;
// const dotenv = require("dotenv");
//  dotenv.config();
//  connectDb();
// app.use(express.json());
// app.use(cors());
// app.get('/' , (req , res)=>{
//     res.send("working");
// })
// app.set('view engine' , 'hbs');
// app.set('views', path.join(__dirname, 'views'));

// hbs.registerPartials(path.join(__dirname, 'views/partials'));
// app.get("/home",(req , res)=>{
//     res.render("home" , {
//        username:" Harman Dhiman",
//        posts : " time pass"
//     })
// })
// app.get("/alluser", (req, res) => {
//     res.render("alluser", {
//         users: users, 
//     });
// });
// app.listen(port , ()=>{
//     console.log(`server running on http://localhost:${port}`);
// })

const express = require("express");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");
const dotenv = require("dotenv");
const { registerDoctor } = require("./controllers/registerDoctor"); // Import registerDoctor controller




dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Sample user data for rendering on "alluser" page
const users = [
    { name: "Harman Dhiman", age: 20 },
    { name: "Hindveer", age: 19 },
    { name: "Jaikirat", age: 20 },
];

// Set view engine and partials for Handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Root route
app.get("/", (req, res) => {
    res.send("Server is working");
});

// Home route
app.get("/home", (req, res) => {
    res.render("home", {
       username: "Harman Dhiman",
       posts: "time pass"
    });
});

// Route to display all users
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users,
    });
});

// Route to register a doctor
app.post("/api/doctors/register", registerDoctor);

// Error handling middleware
app.use(errorHandler);

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the avatar file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
  })


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
