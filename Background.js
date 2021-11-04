import React from "react";
  
const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${process.env.public_images
          + "/background lo.jpg"})`,
      height: "300px", backgroundRepeat: "no-repeat"
    }} >
      <h1>Hello</h1>
    </div>
  );
};
  
export default App;