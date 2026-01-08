import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Job from '@/sections/Job'
import Why from '@/sections/WhyUnlox'
import Marqee from '@/sections/Marquee'
import WhyJoinUs from '@/sections/Opportunities'
import Footer from '@/sections/Footer'

import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Job/>
      <Why/>
      <Marqee/>
      <WhyJoinUs/>
      <Footer/>
    </>
  )
}

export default page