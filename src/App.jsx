import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Happy Birthday!"} message={"Wishing ypu a fantastic day filled with joy!"}/>
      <GreetingCards title={"Congtatulations!"} message={"Great job on your achievement!"}/>
      <GreetingCards title={"Thank you!"} message={"Thank you for your kindness and support!"}/>
      </div>
      
    </div>
  );
};

export default App;
