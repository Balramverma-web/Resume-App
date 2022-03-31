import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.js'
import ContentPage from './components/ContentPage.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/content" element={<ContentPage/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
