import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countries from './components/Countries'
import Updates from './components/Updates'
import PopularCourses from './components/PopularCourses'
import WhyBeyond from './components/WhyBeyond'
import Trending from './components/Trending'
import Services from './components/Services'
import Numbers from './components/Numbers'
import FAQ from './components/FAQ'
import States from './components/States'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countries />
      <Updates />
      <PopularCourses />
      <WhyBeyond />
      <Trending />
      <Services />
      <Numbers />
      <FAQ />
      <States />
      <Footer />
    </div>
  )
}
