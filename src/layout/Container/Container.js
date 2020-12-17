import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import {Chat} from '../../pages/Chat'
import {Footer} from '../Footer/Footer'
import {Header} from '../Header/Header'


export const Container = () => {
  return (
    <BrowserRouter>
      <Header />
   
      <Switch>
    <Route path="/add" component={Chat} />
    <Route path="/Chat" component={Chat} />
    <Route path="/"/>
    <Route component={NotFound} />
      </Switch>
    
      <Footer />
    </BrowserRouter>
  )
}
export default Container;