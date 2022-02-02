import React, { useState } from "react";
import { Route } from "react-router-dom";
import News from "../News";
import LoadingBar from "react-top-loading-bar";
import "./Homepage.css";
import Footer from "../footer1/Footer";

const Homepage = () => {
  const pageSize = 6;

  const [progress, setProgress] = useState(0);
  return (
    <div className="homepage">
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Route exact path="/">
        <News
          setProgress={setProgress}
          key="general"
          pageSize={pageSize}
          country="in"
          category={"business"}
        />
      </Route>
      <Route exact path="/business">
        <News
          setProgress={setProgress}
          key="business"
          pageSize={pageSize}
          country="in"
          category={"business"}
        />
      </Route>
      <Route exact path="/entertainment">
        <News
          setProgress={setProgress}
          key="entertainment"
          pageSize={pageSize}
          country="in"
          category={"entertainment"}
        />
      </Route>
      <Route exact path="/general">
        <News
          setProgress={setProgress}
          key="general"
          pageSize={pageSize}
          country="in"
          category={"general"}
        />
      </Route>
      <Route exact path="/health">
        <News
          setProgress={setProgress}
          key="health"
          pageSize={pageSize}
          country="in"
          category={"health"}
        />
      </Route>
      <Route exact path="/science">
        <News
          setProgress={setProgress}
          key="science"
          pageSize={pageSize}
          country="in"
          category={"science"}
        />
      </Route>
      <Route exact path="/sports">
        <News
          setProgress={setProgress}
          key="sports"
          pageSize={pageSize}
          country="in"
          category={"sports"}
        />
      </Route>
      <Route exact path="/technology">
        <News
          setProgress={setProgress}
          key="technology"
          pageSize={pageSize}
          country="in"
          category={"technology"}
        />
      </Route>
      <Footer />
    </div>
  );
};

export default Homepage;
