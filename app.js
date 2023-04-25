const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const mongo = require('./mongo.js');
const User1 = require('./form1.js');
const User2 = require('./form2.js');
const cnt = require('./contact_details.js');
const centers = require('./corrected.js');

const app = express();
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded({extendend : true}));

app.get("/", (req, res) => {
	res.render("blood.ejs");
})
app.get("/admin", (req, res) => {
    res.render("admin.ejs");
})
app.get("/about", (req, res) => {
	res.render("about.ejs");
})
app.get("/services", (req, res) => {
	res.render("services.ejs");
})
app.get("/contact", (req, res) => {
	res.render("contact.ejs");
})
app.post("/location", (req, res) => { 
	console.log(req.body);

    const searchCity = req.body.name; // Replace with the actual city name from req.body
    // console.log(searchCity);

const results = centers.filter(item => item.City.toLowerCase() === searchCity.toLowerCase());

if (results.length > 0) {
  // console.log(`Address(es) for ${searchCity}:`);
  results.forEach(result => {
    // console.log(result.Address);
  });
} else {
  // console.log(`No address found for ${searchCity}`);
}

    res.render('place.ejs', {results, searchCity});

    // res.redirect('/services');
})

app.post("/contact", async (req, res) => {
	try {
        	await cnt.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            query: req.body.query
        })
        	res.redirect("/contact");
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate Email' });
    }
})

app.post("/services1", async (req, res) => {
	try {
        	await User1.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            grp: req.body.grp
        })
        	res.redirect("/services");
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate Email' });
    }
})

app.post("/services2", async (req, res) => {
	try {
        	await User2.create({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            grp: req.body.grp,
            unit: req.body.unit
        })
        	res.redirect("/services");
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate Email' });
    }
})

app.listen(3000, () => {
	console.log("Listening to port 3000!!!");
})

mongo();