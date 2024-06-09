import React from 'react'

function loading() {
  return (
    //bcz we are on local page move fast use this for delay on page.tsx ==  await new Promise(r=> setTimeout(r,2000))

    <div>Loading...</div>
  )
}

export default loading