import React from 'react'
import Header from './components/Header'
import Ours from './components/Ours'
import Projects from './components/Projects'
import Services from './components/Services'
import Contacts from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <Services />
      <Ours />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App