import ErrorBoundary from './components/ErrorBoundary'
import Home from './components/Home'
import ChapterReader from './components/ChapterReader'
import { useRoute } from './hooks/useRoute'

function App() {
  const route = useRoute()

  return (
    <ErrorBoundary>
      {route.name === 'chapter' ? <ChapterReader id={route.id} /> : <Home />}
    </ErrorBoundary>
  )
}

export default App
