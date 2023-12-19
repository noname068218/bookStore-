import Slider from "react-slick";
import { testimonialData, settings } from "./SettingsSlick";

const Testimonials = () => {
  return (
    <div className="pb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customer says
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis
          </p>
        </div>
        {/* Card section */}
        <div>
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div>
                    <img
                      src={data.img}
                      alt="Feedback clients"
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="absolute z-10 text-black/20 top-0 right-0 font-serif text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
