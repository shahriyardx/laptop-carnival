import React from 'react'

const Container = ({ className, children, ...props }) => {
  return (
    <div className={`container mx-auto px-4 md:px-0 ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Container