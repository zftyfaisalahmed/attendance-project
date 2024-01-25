import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import PayRoll from './Components/PayRoll';
import Employee from './Components/Employee';
import PayrollContainer from './Components/PayrollContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={'/'} element={<Banner />}/>
          <Route path={'/payroll'} element={<PayrollContainer />}/>
          {/* <Route path={'/payroll/employee'} element={<Employee />}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
