import React from 'react'

// COMPONENTS
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function SiteLayout(props) {
  return (
    <main className={'site_main site-layout ' + props.className}>
        <Header />
        <div className='site_content'>
          {props.children}
        </div>
        <Footer/>
    </main>
  )
}

export default SiteLayout
