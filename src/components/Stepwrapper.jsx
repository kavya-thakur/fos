import React from 'react'
import Step1 from './step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const Stepwrapper = () => {
  return (
    <div className='relative'>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
    </div>
  )
}

export default Stepwrapper