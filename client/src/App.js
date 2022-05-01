import './App.css'
import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Menu from './components/Menu'
import Location from './components/Location'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from "./components/Home"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Resetpassword from './components/ResetPassword'
import Cart from "./components/Cart";

const divStyle = {
    backgroundImage: 'url("https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/255773017_4583362898373572_1745065988058525732_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=qZZaJQhsjwMAX9PTfOu&_nc_ht=scontent-lga3-1.xx&oh=3eddf9e82ed2dbfa985bce7cacf59bf6&oe=619245E6)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

function App() {
    return (
        <div className="is-light" style={divStyle}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/location" component={Location}/>
                    <Route path="/signin" component={Signin}/>
                    <Route exact path="/resetpassword" component={Resetpassword}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route path="/settings" component={Profile}/>
                    <Route exact path={"/cart"} component={Cart}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App
