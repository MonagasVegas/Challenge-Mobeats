import React, { Component } from "react";
import "./index.css";

import Footer from "../Footer";
import Carrusel from "../Carrusel";
import Categories from "../Categories";
import Header from "../Header";
import MobilesCategories from "../Categories/MobilesCategories";
import Dashboard from "../Dashboard";
import ViewAll from "../ViewAll";
import MobilesFooter from "../Footer/MobilesFooter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

 
  render() {
    return (
      <div
        class="container-fluid"
        style={{
          background: "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)", }}>

          <Header />
          <Dashboard />
        <div
          class="container-fluid"
          style={{
            background:
              "linear-gradient(0deg, #111111 0%, rgba(0, 0, 0, 0.588231) 64.17%, rgba(0, 0, 0, 0) 85.42%)",
          }}
        >
          <Carrusel />
          <ViewAll />
          <Categories />
          <Footer />
          <MobilesCategories />
         <MobilesFooter />
        </div>
      </div>
    );
  }
}

export default Home;
