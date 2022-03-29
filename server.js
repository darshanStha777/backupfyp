const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const path = require('path');
const cors = require('cors');

var corOption = {
    origin: 'http://localhost:50000'
}

app.use(cors(corOption));

app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");


const passport = require('passport')
const expressSession = require('express-session')
const { initializingPassport } = require('./middleware/passportConfig.js')
initializingPassport(passport);

app.use(expressSession({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())


// admin or manager Routes
const adminRoutes = require('./routes/admin.js')

// team member or company employees routes routes
const teamRoutes = require('./routes/team.js')

// client Routes 
const clientRoutes = require('./routes/client.js')

const loginform = require('./routes/loginform.js')

app.use('/admin', adminRoutes);
app.use('/team', teamRoutes);
app.use('/client', clientRoutes);
app.use(loginform);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})