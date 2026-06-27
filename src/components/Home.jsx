import Header from './Header'
import Footer from './Footer'
import Hero from './sections/Hero'
import Curriculum from './sections/Curriculum'

function Home() {
  return (
    <div className="flex min-h-screen min-h-dvh flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Curriculum />
      </main>
      <Footer />
    </div>
  )
}

export default Home
