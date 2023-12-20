import BestBook from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";

//aos import
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Modal from "./components/modalWindow/modal";

const App = () => {
  const [orderModal, setOrderModal] = React.useState(false);

  const handleOpenModal = () => {
    setOrderModal(!orderModal);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-300">
        <Navbar handleOpenModal={handleOpenModal} />
        <Hero handleOpenModal={handleOpenModal} />
        <BestBook handleOpenModal={handleOpenModal} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonials />
        <Footer />
        <Modal handleOpenModal={handleOpenModal} orderModal={orderModal} />
      </div>
    </>
  );
};
export default App;
