import React from 'react'
import Hero from './_components/Hero'
import Featrues from './_components/Featrues'
import Promo from './_components/Promo'
import Testimonial from './_components/Testimonial'

function page() {
  return (
    <div className='flex flex-col gap-18'>
      <Hero />
      <Featrues />
      <Promo />
      <Testimonial />
    </div>
  )
}

export default page