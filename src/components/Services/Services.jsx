import { ServicesData } from "../../Data/BookData";
import { FaStar } from "react-icons/fa";

const BestBook = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          {/* Card Section */}
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center"
          >
            {ServicesData.map((books) => {
              return (
                <div
                  key={books.id}
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                >
                  <div className="h-[100px]">
                    <img
                      src={books.img}
                      alt=""
                      className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-full flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">{books.title}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {books.description}
                    </p>
                    <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                      Order Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBook;
