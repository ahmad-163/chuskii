import { useState } from 'react'
import Navbar from './MyComponents/Navbar'
import Hero from './MyComponents/Hero'
import Info from './MyComponents/Info'
import Blends from './MyComponents/Blends'
import Ingredients from './MyComponents/Ingredients'
import WhatGoesIn from './MyComponents/Whatgoesin'
import Ritual from './MyComponents/Ritual'
import PaintedWithPakistan from './MyComponents/Paintedwithpakistam'
import TrialBox from './MyComponents/TrialBox'
import CupNeedsToday from './MyComponents/Cupneedstoday'
import InstagramGallery from './MyComponents/Instagramgallery'
import FinalCTA from './MyComponents/FinalCTA'
import Footer from './MyComponents/Footer'
import Founders from './MyComponents/Founders'
import AnnouncementBar from './MyComponents/Announcement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnnouncementBar/>
     <Navbar/>
     <Hero/>
     <Info/>
     <Blends/>
     <Ingredients/>
     <WhatGoesIn/>
     <Ritual/>
     <PaintedWithPakistan/>
     <TrialBox/>
     <CupNeedsToday/>
     <InstagramGallery/>
     <Founders/>
     <FinalCTA/>
     <Footer/>
    </>
  )
}

export default App
