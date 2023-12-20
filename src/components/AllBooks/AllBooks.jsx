import { BooksData } from "../../Data/AllBooksData";
import { FaStar } from "react-icons/fa";
const AllBooks = () => {
  return (
    <>
      <div className="py-10">
        <div className="container placeholder-gray-100">
          {/* Header */}

          <div
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto"
          >
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Books
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              iure, corporis
            </p>
          </div>
          {/* card */}
          <div>
            <div
              data-aos="slide-up"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
            >
              {BooksData.map((data) => (
                <div key={data.id} className="space-y-3">
                  <img
                    src={data.img}
                    alt="Descriptions Books: rating, title, author"
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{data.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {data.author}
                    </p>

                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">
                View All books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
