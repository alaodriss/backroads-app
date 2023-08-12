import React from 'react'

const Titel = ({title,subTitel}) => {
  return (
    <div className="section-title">
            <h2>{title} <span>{subTitel}</span></h2>
  </div>
  )
}

export default Titel