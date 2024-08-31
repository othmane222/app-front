import React , {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginSignup from './components/LoginSignup/LoginSignup';
import ResetPassword from './components/Resetpassword/ResetPassword';
import Navbar from './components/Navbar';
import StripeContainer from './components/payment/StripeContainer';

// Other imports...

const App = () => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className='App'>
			<h1>The Spatula Store</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					
					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
				</>
			)}
		</div>

    

    
   
  );
};

export default App;
