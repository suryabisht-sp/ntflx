
import Image from 'next/image'
import styles from './page.module.css'
import Subscribe from './components/subscribe'
import Video from './components/video'
import Downloads from './components/downloads'
import Device from './components/Device'
import Kids from './components/Kids'
import FrequentlyAskedQuestion from './components/Faq'
import Footer from './components/Footer'
import Navbar from './components/Header'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Subscribe />
      <Video />
      <Downloads />
      <Device />
      <Kids />
      <FrequentlyAskedQuestion />
      <Footer/>
      </main>
  )
}
