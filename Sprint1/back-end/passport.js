const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require('./models/createUsersModel')
const passport = require("passport")
const jwt = require("jsonwebtoken")
require("dotenv").config();
//Login auth strategy

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log("jwt_payload")
        // console.log(jwt_payload)
        User.find({ mail: jwt_payload.mail })
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    })
);