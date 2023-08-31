import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewForm from './components/NewForm'
import Header from './components/Header'
import SideBar from './components/SideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <SideBar/>

    <div className="content-wrapper">
       
            <div className="page-content fade-in-up">
                <NewForm/>
            </div>
           
            <footer className="page-footer">
                <div className="font-13">2018 © <b>AdminCAST</b> - All rights reserved.</div>
                <a className="px-4" href="http://themeforest.net/item/adminca-responsive-bootstrap-4-3-angular-4-admin-dashboard-template/20912589" target="_blank">BUY PREMIUM</a>
                <div className="to-top"><i className="fa fa-angle-double-up"></i></div>
            </footer>
        </div>

    </>
  )
}

export default App
