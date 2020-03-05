import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaPlayer from './components/mediaPlayer/MediaPlayer';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      	<Router>
					<Route path='/' component={MediaPlayer} />
					<Route path='/' component={HomePage} />
				</Router>
    </div>
  );
}

export default App;
