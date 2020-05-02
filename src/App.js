import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Squares from "./components/Squares";
import Footer from "./components/Footer";

function App() {
  const [id, setId] = useState("");
  return (
    <Fragment>
      <Header />
      <Input setId={setId} />
      <Squares searchId={id} />
      <Footer />
    </Fragment>
  );
}

export default App;
