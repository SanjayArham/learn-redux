import React from 'react'

// ROUTER DOM
import { Link } from 'react-router-dom'
import SiteLayout from '../../layouts/SiteLayout'

function NoPage() {
  return (
    <SiteLayout>
        <section className='page-404 text-center'>
            <h1>404</h1>
            <p><Link to={"/"}>Go Back</Link></p>
        </section>
    </SiteLayout>
  )
}

export default NoPage
