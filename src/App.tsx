import { Navigate, Route, Routes } from 'react-router-dom'
import * as P from '@/pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<P.MainPage />} />
    </Routes>
  )
}

export default App
