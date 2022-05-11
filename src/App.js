import {Routes, Route} from 'react-router-dom';
import Loginpage from './Pages/Loginpage';
import Homepage from './Pages/Homepage';
import Popuppage from './Pages/Popuppage';
import Homepage2 from './Pages/Homepage2';
import Mappingpage from './Pages/Mappingpage';
import SignUp from './Pages/SignUp';
import Doctormaster from './Pages/Doctormaster';
import Scheduler from './Pages/Scheduler';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path="/login" element={<Loginpage/>}></Route>
     <Route exact path="/signup" element={<SignUp/>}></Route>
     <Route exact path="/" element={<Homepage/>}></Route>
     <Route exact path="/doctormaster" element={<Doctormaster/>}></Route>
     <Route exact path="/pop" element={<Popuppage/>}></Route>
     <Route exact path="/home2" element={<Homepage2/>}></Route>
     <Route exact path="/map" element={<Mappingpage/>}></Route>
     <Route exact path="/scheduler" element={<Scheduler/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
