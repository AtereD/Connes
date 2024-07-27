import About from "@/components/About";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Why from "@/components/Why";
import Services from "@/components/Why";


export default function Home() {
  return (
   <main>
   <Hero/>
   <About/>
   <Products/>
   <Why/>
   <Reviews/>
   <Location/>
   </main>
  );
}
