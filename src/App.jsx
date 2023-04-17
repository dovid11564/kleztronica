import './App.css'
import { slide as Menu } from 'react-burger-menu'

function App() {
  function showSettings(event) {
    event.preventDefault()
  }

  return (
    <>
      {/* <h1>Kleztronica</h1> */}
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
    </>
  )
}

export default App
