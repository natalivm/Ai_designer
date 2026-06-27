import Header from './Header'
import Footer from './Footer'
import Hero from './sections/Hero'
import Curriculum from './sections/Curriculum'
import Skills from './sections/Skills'
import Features from './sections/Features'
import Audience from './sections/Audience'
import Outcome from './sections/Outcome'
import Faq from './sections/Faq'

function Home() {
  return (
    <div className="flex min-h-screen min-h-dvh flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Curriculum />
        <Skills />
        <Features />
        <Audience />
        <Outcome />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default Home
