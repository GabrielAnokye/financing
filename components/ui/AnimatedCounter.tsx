'use client'
import React from 'react'
import Countup from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
        <Countup
          duration={2}
          decimals={2}
          prefix='$'
          decimal=','
          end={amount} />
    </div>
  )
}

export default AnimatedCounter