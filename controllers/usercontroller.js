const db = require("../models");

findemail = function() {
        db.User
            .findOne({ email: req.params.email})
            .then(dbModel => {
                console.log(dbModel);
                if (dbModel.length === 0) {
                    return (false);
                } else (true)
            })        
            .catch(err => res.status(422).json(err));
    }

module.exports = {
      registerNewUser: function(req, res) {
        if (findemail () === false) {
            db.User
            .create (req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else (res.Json ({message: "User Name already exists. Please log-in."}))
      }  
    }

