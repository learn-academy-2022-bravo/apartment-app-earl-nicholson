import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import UserApartment from './pages/UserApartment'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount () {
    this.readApartment()
  }

  readApartment= () => {
    fetch ("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log('apartments read error: ', errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route 
          path="/apartmentindex" 
          render = {(props) => <ApartmentIndex apartments ={this.state.apartments}/>}
          />

          <Route 
          path="/apartmentshow/:id" 
          render={(props) => { 
            let id= +props.match.params.id
            let apartment = this.state.apartments.find(apartmentObject => apartmentObject.id === id)
            console.log(apartment);
            return <ApartmentShow apartment={apartment}  />}}
          />

          {logged_in &&
          <Route 
          path="/userapartmentindex" 
          render = {(props) =>{ 
            let userApartments = this.state.apartments.filter(apartment => apartment.user_id === current_user.id)
          return (
            <UserApartment userApartments = {userApartments}/>
            )}}
            />}
          
          <Route path="/apartmentnew" component={ApartmentNew} />
          <Route path="/apartmentedit" component={ApartmentEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
        
        
  
    )
  }
}

export default App