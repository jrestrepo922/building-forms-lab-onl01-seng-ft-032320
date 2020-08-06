// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  state ={
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    const band = {...this.state}
    
    this.props.addBand(band)

  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>BandName</label><br></br>
          <input type="text" onChange={this.handleOnChange} value={this.state.name}/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}




export default BandInput;
