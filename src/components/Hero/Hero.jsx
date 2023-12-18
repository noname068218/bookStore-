import { useState } from "react";
import book1 from "../../assets/book/book1.jpg";
import book2 from "../../assets/book/book2.jpg";
import book3 from "../../assets/book/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const Hero = () => {
  const [imageid, setImageId] = useState(book2);
  const [title, setTitle] = useState("his Life will forever be Changed");
  const [description, setDescriprion] = useState(
    "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const imageBG = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ease-linear"
        style={imageBG}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Content */}

            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl fron-bold">
                {title}
              </h1>
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                by Anonymous
              </p>
              <p className="text-sm">{description}</p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* Main Image */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={imageid}
                  alt=""
                  className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              {/* other Image list*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
