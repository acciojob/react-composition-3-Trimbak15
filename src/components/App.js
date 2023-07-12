
import React from "react";
import './../styles/App.css';
import FirstToolTip from "./FirstToolTip";
import SecondToolTip from "./SecondToolTip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <FirstToolTip text="This is a tooltip">
          <h2 className="tooltip">Hover over me</h2>
        </FirstToolTip>

        <SecondToolTip text="This is another tooltip">
          <p className="tooltip">Hover over me to see another tooltip</p>
        </SecondToolTip>
    </div>
  )
}

export default App
