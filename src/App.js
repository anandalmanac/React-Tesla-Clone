import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Car from './components/Car';
import {ParallaxProvider} from 'react-scroll-parallax'
import data from './data';

function App() {
  return (
    <div className="App">


     
      <Router>
       <Header />
      
        <Switch>
         

          {data.items.map(item=>(
            <Route path={item.link}>
            
               <Car model={item}/>
           
            
          </Route>
          ))}
          
          <Route path="/model3">
            <ParallaxProvider>
               <Car model='model-3'/>
            </ParallaxProvider>
            
          </Route>

           <Route path="/">
             <Home />
          </Route>
        </Switch>

      </Router>
      
     
      
     
    </div>
  );
}

export default App;
