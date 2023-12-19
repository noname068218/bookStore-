import BestBook from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";
import Testimonials from "./components/Testimonial/Testimonials";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-300">
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonials />
      </div>
    </>
  );
};
export default App;
