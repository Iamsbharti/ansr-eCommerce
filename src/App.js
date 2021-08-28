import React from "react";
import { DashBoard } from "./components/DashBoard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Product from "./Products";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/:uniq_id" exact component={Product} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
