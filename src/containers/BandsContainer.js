import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import { Band } from '../components/Band'

class BandsContainer extends Component {

  render() {
    debugger
    let bands = this.props.bands.map((band, i) => {
      return <Band key={i} band={band}/>
    })
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {bands}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => {dispatch({type: "ADD_BAND", band: band})}
  } 
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
