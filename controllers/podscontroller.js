const db = require("../models");

findpodName= function() {
  db.Pod
      .findOne({ podName: req.params.podName})
      .then(dbModel => {
          console.log(dbModel);
          if (dbModel.length === 0) {
              return (false);
          } else (true)
      })        
      .catch(err => res.status(422).json(err));
}


// Defining methods for the podsController
module.exports = {
  create: function(req, res) {
    db.Pod
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Pod
      .findOneAndUpdate({ podName: req.params.podName }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
};
