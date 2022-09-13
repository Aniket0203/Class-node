const async = require("async");
const catM = require("../Model/categoaryModel");
const brM = require("../Model/brandModel");
const ProductM = require("../Model/ProductModel");
var validator = require("validator");

const home = (req, res) => {
  // res.send({x:10})
  async.parallel({
    categoryData: function (callback) {
      catM.find({}, function (err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    },
    brandData: function (callback) {
      brM.find({}, function (err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    },

    productData: function (callback) {
      ProductM.find({}, function (err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    },
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.render("index", result);
      }
    },
  });
};
const login = (req, res) => {
  res.render("loginPage");
};

const loginAction = (req, res) => {
    console.log(req.body)
    res.send({msg:"Action route called"})
  if (
    validator.isEmpty(req.body.useremail) || !validator.isEmail(req.body.useremail)
  ) {
    res.send({ msg: "Email Is invalid" });
  } else if (
    validator.isEmpty(req.body.userpassword) ||!validator.isAlphanumeric(req.body.userpassword, "en-IN") ||!validator.isLength(req.body.userpassword, { min: 4, max: 8 })
  ) {
    res.send({ msg: "password are invalid" });
  }
};
const registerAction = (req, res) => {
    console.log(req.body);
    console.log("resgister called")
  if (
    validator.isEmpty(req.body.username) ||
    !validator.isLength(req.body.username, { min: 2, max: 20 })
  ) {
    res.send({ msg: "user name is invalid" });
  } else if (
    validator.isEmpty(req.body.usermobile) ||
    !validator.isMobilePhone(req.body.usermobile, "en-IN")
  ) {
    res.send({ msg: "Mobile Number is invalid is invalid" });
  } else if (
    validator.isEmpty(req.body.usermobile) ||
    !validator.isEmail(req.body.useremail)
  ) {
    res.send({ msg: "Email is invalid" });
  } else if (
    validator.isEmpty(req.body.userpassword) ||
    !validator.isAlphanumeric(req.body.userpassword, "en-IN") ||
    !validator.isLength(req.body.userpassword, { min: 4, max: 8 })
  ) {
    res.send({ msg: "password is invalid" });
  } else if (req.body.userpassword != req.body.usercpassword) {
    res.send({ msg: "confirm password missmatch" });
  } else {
    res.send({ msg: "Do insert" });
  }
};

module.exports = {
  home,
  login,
  loginAction,
  registerAction,
};
