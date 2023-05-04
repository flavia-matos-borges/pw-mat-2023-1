import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/ui/TopBar'

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    </>
  )
}

export default App
