import './main.css'
import './globals.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './_root/pages'
import SigninForm from './_auth/forms/SigninForm'

const App = () => {
  return (
   <main className='flex h-screen'>
    <Routes>
        {/* public route */}
        <Route path='/sign-in' element={<SigninForm/>}/>
        {/* private route */}
        <Route index element={<Home/>}/>
    </Routes>
   </main>
  )
}

export default App