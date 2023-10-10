
import Image from 'next/image'
import styles from './page.module.css'
import Subscribe from './components/subscribe'
import Video from './components/video'
import Downloads from './components/downloads'
import Device from './components/Device'

export default function Home() {
  return (
    <main className="">
      <Subscribe />
      <Video />
      <Downloads />
      <Device/>
      </main>
  )
}
