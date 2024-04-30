import { useState } from 'react'
import './App.css';
import './assets/styles/reset.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Grid />
      <Footer />
      </>
  )
}

export default App
