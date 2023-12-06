import { Box } from '@mui/material'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'

function App() {
  return (
    <Box>
      <Router>
        <Header />
        <Home />
      </Router>
    </Box>
  )
}

export default App
