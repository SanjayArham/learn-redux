import React from 'react'

function CrudLayout(props) {
  return (
    <main className={'site_main crud-layout ' + props.className}>
      <div className='site_content'>
        {props.children}
      </div>
    </main>
  )
}

export default CrudLayout
