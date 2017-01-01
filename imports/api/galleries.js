import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { check } from 'meteor/check'

export const Galleries = new Mongo.Collection('galleries')

if (Meteor.isServer) {
  Meteor.publish('galleries', function galleriesPublication () {
    return Galleries.find({})
  })
  Meteor.publish('single-gallery', function (_id) {
    check(_id, String)
    const data = Galleries.find({ _id })
    if (data)
      return data
    this.ready()
  })
}

Galleries.schema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    regEx: SimpleSchema.RegEx.Id,
  },
  name: {
    type: String,
    label: 'Name',
  },
  date: {
    type: Date,
    label: 'Date',
  },
  description: {
    type: String,
    label: 'Description',
  },
  thumbnail: {
    type: String,
    label: 'The picture intended to represent the gallery',
    // regEx: SimpleSchema.RegEx.Id,
  },
})

Galleries.attachSchema(Galleries.schema)

Galleries.helpers({
  getLink () {
    return '/gallery/' + this._id
  },
  getThumbnailLink () {
    return '/img/' + this.thumbnail
  },
})
