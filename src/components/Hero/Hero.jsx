import { useState } from "react";
import book2 from "../../assets/book/book1.jpg";
import book1 from "../../assets/book/book2.jpg";
import book3 from "../../assets/book/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";
const ImageList = [
  {
    id: 1,
    img: book1,
    title: "His Life will forever be Changed",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  const [imageid, setImageId] = useState(book1);
  const [title, setTitle] = useState("His Life will forever be Changed");
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
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl lg:text-7xl fron-bold"
              >
                {title}
              </h1>
              <p
                data-aos="fade-up-left"
                data-aos-duration="500"
                data-aos-delay="100"
                className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary"
              >
                by Anonymous
              </p>
              <p className="text-sm">{description}</p>
              <div>
                <button
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* Main Image */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  src={imageid}
                  alt=""
                  className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              {/* other Image list*/}

              <div
                data-aos="zoom-in-down"
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full"
              >
                {ImageList.map((item) => (
                  <img
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    key={item.id}
                    src={item.img}
                    alt="Top Books"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 ease-in"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? book1 : item.id === 2 ? book2 : book3
                      );
                      setTitle(item.title);
                      setDescriprion(item.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
