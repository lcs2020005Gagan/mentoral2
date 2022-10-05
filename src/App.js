import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Articles from './components/Articles';
import Programs from './components/Programs';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Profile from './components/Profile';
import Login from './components/Login';
import LoginM from './components/LoginM';
import Mentors from './components/Mentors';

//to do:
//useState in ProfileMentor notestate.js and profile.js
function App() {
  return (
    <NoteState>

       <BrowserRouter>

    
<Navbar />
<Routes>
<Route exact path="/" element= <Home/> />
<Route exact path="/articles" element= <Articles/> />
<Route exact path="/programs" element= <Programs/> />
<Route exact path="/profiles" element= <Profile/> />
<Route exact path="/loginu" element= <Login/> />
<Route exact path="/loginm" element= <LoginM/> />
<Route exact path="/mentors" element= <Mentors/> />



    </Routes>


</BrowserRouter>
</NoteState>

    
  );
}

export default App;
