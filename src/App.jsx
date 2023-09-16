import { useState } from 'react'
import './App.css'
import NewForm from './components/NewForm'
import Layout from './Layouts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Layout>
    <NewForm/>
   </Layout>

    </>
  )
}

export default App
