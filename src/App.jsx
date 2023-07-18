import { Outlet } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import { useAppContext } from './contextProvider/useAppContext'

function App() {
  const {appLoading} = useAppContext()

  if(appLoading){
    return <Loader/>
  }
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
