import React from 'react'
import HeroContainer from "./component/HeroContainer.js";
import DynamicCards from "./component/DynamicCards.js";
import AboutUs from "./component/AboutUs.js";
import Testnomial from "./component/Testnomial.js";
import Blog from "./component/Blog.js";

function App() {
  return (
    <div className=''>
      <HeroContainer />
      <DynamicCards />  {/* The Task Component */}
      <AboutUs />
      <Testnomial />
      <Blog />
    </div>
  )
}

export default App