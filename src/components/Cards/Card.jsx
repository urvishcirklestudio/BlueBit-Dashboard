import React from 'react'
import './card.scss'

function Card({
    children,
    className,
    ...props

}) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card 