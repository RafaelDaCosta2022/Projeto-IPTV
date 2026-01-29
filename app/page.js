import Header from '../components/Header'
import Hero from '../components/Hero'
import LaunchesSpotlight from '../components/LaunchesSpotlight'
import Devices from '../components/Devices'
import Content from '../components/Content'
import Pricing from '../components/Pricing'
import Referral from '../components/Referral'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LaunchesSpotlight />
      <Devices />
      <Content />
      <Pricing />
      <Referral />
      <FAQ />
      <Footer />
    </main>
  )
}