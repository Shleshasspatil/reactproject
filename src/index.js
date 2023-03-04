import React from "react"
import {createRoot} from "react-dom/client"
import App1 from './components/App1';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Nav from './components/Nav';


createRoot (document.getElementById('root')).render(<App1/>)
createRoot (document.getElementById('root')).render(<Logo/>)
createRoot (document.getElementById('root')).render(<Menu/>)
createRoot (document.getElementById('root')).render(<Nav/>)