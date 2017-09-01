import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { Provider } from 'react-redux'
import ReactGA from 'react-ga'

import store from './store'
import Landing from './Landing'
import Products from './Products'
import NoMatch from './NoMatch'
import Services from './Services'
import Price from './Price'
import Contacts from './Contacts'

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-76634359-4')
}
const logPageView = () => {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  return null
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Route path='/' component={logPageView} />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/products' component={Products} />
          <Route path='/services' component={Services} />
          <Route path='/price' component={Price} />
          <Route path='/contacts' component={Contacts} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
