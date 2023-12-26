import { Route, Routes, useNavigate } from 'react-router-dom';
import DataDisplay from './components/DataDisplay';
import UserForm from './components/UserInput';
import { useState } from 'react';
import './App.css';

const userData = [
  {
    id: 1,
    title: "Apple phone",
    description: "Apple is a iphone. Need to buy product"
  },
  {
    id: 2,
    title: "Airtel",
    description: "Airtel is a iphone SIM. Need to buy product"
  },
  {
    id: 3,
    title: "Phone Case",
    description: "To protect the phone. Need to buy product"
  }
]

function App() {
  const [defaultData, changeData] = useState(userData);
  const navigate = useNavigate()

  const addToCart = (data) => {
    data['id'] = defaultData.length + 1;
    changeData([...defaultData, data]);

    navigate("/");
  }

  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<DataDisplay userData={defaultData}/>} />
        <Route path='/userForm' element={<UserForm addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
