"use client"

import Hero from './_components/Hero'
import Featrues from './_components/Featrues'
import Testimonial from './_components/Testimonial'
import QNA from './_components/QNA'

function page() {
  return (
    <div className='flex flex-col gap-18'>
      <Hero />
      <Featrues />
      <Testimonial />
      <QNA />
    </div>
  )
}

export default page