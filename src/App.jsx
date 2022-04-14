import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from "aos";

// import Home from "./pages/Home";
// import HomeDemo1 from "./template/HomeDemo1";
// import HomeDemo2 from "./template/HomeDemo2";
import HomeDemo3 from "./template/HomeDemo3";

import "aos/dist/aos.css";
import "./assets/css/General.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>GoHash</title>
      </Helmet>
      <Switch>
        <Route path="/" exact component={HomeDemo3} />
      </Switch>
    </div>
  );
};

export default App;

