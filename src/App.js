import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage'
import EventDetail from './Components/EventDetailPage'
import PageNotFound from './Components/PageNotFound'

import { Routes, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
