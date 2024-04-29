import React from 'react'

function CardBody({
    children,
    className,
    ...props

}) {
  return (
    <div className={`card-body ${className}`} {...props}>
      {children}
    </div>
  )
}

export default CardBody
 
