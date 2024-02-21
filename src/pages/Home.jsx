import React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import Doctors from "../components/Doctors";


const Home = () => {
  return (
    <div>
      <Layout 
      titre="Empowering Health Choices for a Vibrant Life Your Trusted.."
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
      omnis natus accusantium quos. Reprehenderit incidunt expedita
      molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
      fugiat vero consequatur?"
      />
      <About/>
      <Services/>
      <Blogs/>
      <Doctors/>
    </div>
  );
};

export default Home;
