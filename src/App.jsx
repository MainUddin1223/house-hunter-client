import './App.css'
import Loader from './components/Loader'
import { useAppContext } from './contextProvider/useAppContext'
import Home from './pages/Home'

function App() {
  const {appLoading} = useAppContext()

  if(appLoading){
    return <Loader/>
  }
  return (
    <>
      <Home/>
    </>
  )
}

export default App
