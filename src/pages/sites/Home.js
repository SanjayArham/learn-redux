import React, { Suspense } from 'react'

// LAYOUT
// import SiteLayout from '../../layouts/SiteLayout';
const SiteLayout = React.lazy(() => import('../../layouts/SiteLayout'));

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteLayout>
          <div className='page-home'>
            <h1 className='text-center'>Home Page</h1>
          </div>
      </SiteLayout>
    </Suspense>
  )
}

export default Home
