import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Webroutes from './routes';
import Layout from './web';

function App() {
  return (
    <Router>
      <div className="App">

          <Routes>
          <Route path="/" element={<Layout />}>
            {Webroutes.map((item, i) => (
              <Route key={i} path={item.path} element={item.component} />
            ))}
          </Route>
          </Routes>
    
      </div>
    </Router>
  );
}

export default App;
