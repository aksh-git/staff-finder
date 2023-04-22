import React from 'react'

function AddNewFieldBtn(props) {

  const action = props.clickAction;
  return (
    <button
      onClick={()=>action('hwllo')}
      className='float-right inline-flex items-center gap-2 border bottom-1 px-4 py-1 text-sm font-semibold bg-bodyBg text-gray-600 rounded-3xl'    
    >
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
      <span>{props.children}</span>
    </button>
  )
}

export default AddNewFieldBtn