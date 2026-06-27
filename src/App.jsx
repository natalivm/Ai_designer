import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Curriculum from './components/sections/Curriculum'
import Skills from './components/sections/Skills'
import Features from './components/sections/Features'
import Audience from './components/sections/Audience'
import Outcome from './components/sections/Outcome'
import Faq from './components/sections/Faq'

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
