import React from 'react'
import Hero from '../components/Hero'
import LatestColection from '../components/LatestColection'
import TopProduct from '../components/TopProduct'
import OurPolicy from '../components/OurPolicy'
import NewsLetters from '../components/NewsLetters'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestColection/>
      <TopProduct/>
      <OurPolicy/>
      <NewsLetters/>
    </div>
  )
}

export default Home