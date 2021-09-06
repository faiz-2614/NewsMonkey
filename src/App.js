import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {

apikey= "be8ab140071640d481f9aca0b6751a9e"

   
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    const pageSize=10;
    return (
      <div>
       <Router>
       <NavBar/> 
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
