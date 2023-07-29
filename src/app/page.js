import Image from 'next/image'
import Intro from './Intro/layout'
import Portfolio from './Portfolio/layout'


export default function Home() {
  return (
    <main>
      <Intro />
      <Portfolio />
    </main>
  )
}
