import React from 'react'

import { Element } from "react-scroll";
import Hero from "../component/landing-page3/Hero";
import Footer3 from "../component/partials/Footer3";
import Mentor from "../component/landing-page3/Mentor";
import Header4 from '../component/partials/Header4'
import Counter from '../component/landing-page3/Counter';
import Fakultas from '../component/landing-page3/Fakultas';
import Circle3 from '../assets/user/images/BackgroundGlass/circle3.png';
import Tentang from '../component/landing-page3/Tentang';
import Testimoni from '../component/landing-page3/Testimoni';
import Banner from '../component/landing-page3/Banner';
import Artikel from '../component/landing-page3/Artikel';

const LandingPage3 = () => {
  return (
    <>
      <Header4 />
      <main>
        <img src={Circle3} alt="" style={{ width: '35%', position: 'absolute', top: '0%', left: '-10%', filter: 'blur(20px)' }} />

        <Hero />
        <Counter />
        <Fakultas />
        <Mentor />
        <Tentang />
        <Testimoni />
        <Artikel />
        <Banner />
        <Footer3 />
      </main>
    </>
  )
}

export default LandingPage3