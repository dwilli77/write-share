const db = require("../models")

module.exports = {
  // findAll: function(req, res) {
  //   db.Pod
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Pod
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Pod
      .create({
        topic: req.body.topic,
        name: req.body.name,
        creator: req.body.creator,
        creatorId: req.body.creatorId,
        numParticipants: req.body.numParticipants,
        activeParticipant: req.body.activeParticipant,
        totalParticipants: req.body.totalParticipants,
        participantIds: req.body.participantIds
      })
      .then(result => {
        return db.User.findOneAndUpdate({_id: req.body.userId}, {$push: {userPods: result._id}}, {new: true})
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  getMyPods: function(req, res) {
    db.Pod
      .find({ participantIds: req.body.userId})
      .then(result => res.json(result))
      .catch(err=> res.status(422).json(err))
  },
  getOnePod: function(req, res) {
    db.Pod
      .findById({_id: req.body.podId}).populate('content')
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  nextUser: function(req, res) {
    db.Pod
      .findOneAndUpdate({_id: req.body.podId}, {$set: {activeParticipant: req.body.newActive}}, {new:true})
      .then(result => res.send(result.activeParticipant))
      .catch(err => res.status(422).json(err));
  },
  read: function(req,res) {
    db.Pod
    .find({}).then(result => res.json(result))
  },
  joinPod: function(req, res) {
    db.Pod
    .findOneAndUpdate({_id: req.body.podId}, {$push: {totalParticipants: req.body.username, participantIds: req.body.userId}}, {new:true})
    .then(result => {
      return db.User.findOneAndUpdate({_id: req.body.userId}, {$push: {userPods: req.body.podId}}, {new: true})
    })
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err))
  }
  // update: function(req, res) {
  //   db.Pod
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Pod
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
