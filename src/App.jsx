import './App.css'
import About from './Sections/About'
import Banner from './Sections/Banner'
import Blogs from './Sections/Blogs'
import Education from './Sections/Education'
import Footer from './Sections/Footer'
import Header from './Sections/Header'
import Project from './Sections/Project'
import Skills from './Sections/Skills'
import Testimonials from './Sections/Testimonials'

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Project></Project>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Footer></Footer>
    </>
  )
}

export default App
