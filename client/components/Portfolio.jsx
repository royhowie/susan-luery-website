import { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import GalleryThumbnail from './GalleryThumbnail.jsx'
import { Galleries } from '../../imports/api/galleries.js'

class Portfolio extends Component {
  componentWillMount () {
    document.title = 'Susan Luery Studios — Portfolio'
  }

  renderGalleryThumbnails () {
    return this.props.galleries.map(gallery => {
      return <GalleryThumbnail key={gallery._id} gallery={gallery} />
    })
  }

  render () {
    return (
      <div>
        <h2 className='text-center'>Portfolio</h2>
        <div className='row'>
          {this.renderGalleryThumbnails()}
        </div>
      </div>
    )
  }
}

Portfolio.propTypes = {
  galleries: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('galleries')
  return {
    galleries: Galleries.find({}, { sort: { date: 1 } }).fetch(),
  }
}, Portfolio)
