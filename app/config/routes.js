import React from 'react'
import {
  HashRouter as Router, // BrowserRouter used for server side rendering
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import Home from '../components/Home'
import Main from '../components/Main'

const Routes = () => (
  <Router>
    <div>
      <header>
        <h1>Logo Title</h1>
        <nav>
          <ul id='mainNav'>
            <li><Link to='/'>Home</Link></li>
            <li><NavLink to='/main' activeClassName='selected colorRed' activeStyle={{color: '#900'}}>Main</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Route exact path='/'>
          <Home name='Michel' />
        </Route>
        <Route path='/main' component={Main} />
      </main>
    </div>
  </Router>
)

export default Routes
