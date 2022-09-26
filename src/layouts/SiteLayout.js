import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'


function SiteLayout(props) {
  return (
    <main className={' site_main site-layout header-' + !props.hideHeader + ' footer-' + !props.hideFooter + ' ' + props.className}>
        {!props.hideHeader ?
        <Header />
        :
        null
        }
        <div className='site_content'>
          {props.children}
        </div>
        {!props.hideFooter ?
        <Footer/>
        :
        null
        }
    </main>
  )
}

SiteLayout.propTypes = {
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  className: PropTypes.string
}

SiteLayout.defaultProps = {
  hideHeader: false,
  hideFooter: false,
  className: ""
}

export default SiteLayout
