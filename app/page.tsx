import LoadingContainer from "@/components/global/loadingContainer";
import FeaturedProducts from "@/components/home/featuredProducts";
import Hero from "@/components/home/hero";
import { Suspense } from "react";


const HomePage = () => {
  return <>
    <Hero />
    <Suspense fallback={<LoadingContainer />}>
      <FeaturedProducts />
    </Suspense>
  </>
};
export default HomePage;  
