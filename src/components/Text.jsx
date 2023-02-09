import React from 'react'

const Text = ({content}) => {
  return (
    <div style={{ width:'80vh',padding:'20px', color:'#1A120B'}}>
      <div><span>{content}</span></div>
    </div>
  )
}

export default Text
