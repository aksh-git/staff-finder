import React from 'react'
import { redirect } from 'react-router-dom'

function SocialButton({bgColor, textColor, url, children}) {
  return (
    <button onClick={()=>window.open(url)} class={`${bgColor} ${textColor} bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded`}>
        {children}
    </button>
  )
}

export default SocialButton