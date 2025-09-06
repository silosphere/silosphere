import Image from "next/image";
import Layout from "./layout";

import Hero from "./Hero";
import Blog from "./Blog";
import Contact from "./Contact";


export default function Home() {
  return (
    <div>
  
    <Hero/>
    <Blog/>
    <Contact/>
  
    </div>
  );

}
