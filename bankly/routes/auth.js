/** Auth-related routes. */

const User = require("../models/user");
const express = require("express");
const router = express.Router();
const createTokenForUser = require("../helpers/createToken");
const { ClientBase } = require("pg");

/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } =
      req.body;
    let user = await User.register({
      username,
      password,
      first_name,
      last_name,
      email,
      phone,
    });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    // TESTS BUG #4
    // No await before calling User.authenticate
    // let user = User.authenticate(username, password);

    // FIXES BUG #4
    let user = await User.authenticate(username, password);
    // END BUG #4
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
