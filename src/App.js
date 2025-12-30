import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
