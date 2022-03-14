import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar/NavBar';
import Dashboord from './components/component-dashboord/Dashboord';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
 




function App() {
  return (
   
      <div className="App">
         <Navbar />
       
       <Dashboord />
         
        
         
         
      </div>
     
  );
}

export default App;
