import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Webroutes from './routes';
import Layout from './web';

function App() {
  return (
    <Router>
      <Container maxWidth={'xl'} sx={{p:{lg:"0px !important",md:"0px !important",sm:"0px !important",xs:"0px !important"}}}>
      <div className="App">

          <Routes>
          <Route path="/" element={<Layout />}>
            {Webroutes.map((item, i) => (
              <Route key={i} path={item.path} element={item.component} />
            ))}
          </Route>
          </Routes>
    
      </div>
      </Container>
    </Router>
  );
}

export default App;
