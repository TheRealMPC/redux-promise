import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {addProfile} from './ducks/user'

import './App.css'

class App extends Component {
  constructor() {
     super()
     this.getProfile = this.getProfile.bind(this)
  }
  componentDidMount() {
   console.log('Original Props: ', this.props)     
  }

  componentWillReceiveProps(nextProps) {
     console.log('New Props: ', nextProps)
  }
  getProfile() {
     this.props.addProfile(axios.get('http://swapi.co/api/people/1'))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Async Redux</h2>
        </div>
        <div>
           <button className="profile-button" onClick={this.getProfile}>Get Profile</button>
        </div>
        <section className="App-intro">
            <h3>Profile:</h3>
            <ul>
               <li>Name: {this.props.user.profile ? this.props.user.profile.name: null}</li>
            </ul>

        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}
const mapDispatchToProps = {
   addProfile
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
