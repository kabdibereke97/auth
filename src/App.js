import Signin from "./components/Signin";
import { Routes, Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Account from "./components/Account";

function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
            Firebase Ath
      </h1>
      <Routes>
        <Route path='/' element= {<Signin/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/account' element= {<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;
