import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Foods from "./components/Foods";
import Navbar from "./components/common/Navbar";
import Customers from "./components/Customers";
import Points from "./components/Points"
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm"
import FoodForm from "./components/FoodForm";
import 'bootstrap/dist/css/bootstrap.css'
import AddFoods from "./components/AddFoods";


function App() {

  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/addfoods" component={AddFoods} />
        <Route path="/foods/:id" component={FoodForm} />
        <Route path="/login" component={LoginForm}/>
        <Route path="/foods" component={Foods}/>
        <Route path="/customer" component={Customers}/>
        <Route path="/points" component={Points}/>
        <Route path="/not-found" component={NotFound}/>
        <Route path="/" exact component={Foods} />
        <Redirect from="/" exact to="/foods"/>
        <Redirect to="/not-found"/>
      </Switch>
    </Fragment>
  );
}

export default App;
