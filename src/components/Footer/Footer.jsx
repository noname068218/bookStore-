import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container ">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl  text-xl font-bold sm:text-left text-justify mb-3">
              Books Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              cumque fuga distinctio quas!
            </p>
            <br />
            {/* social links */}
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-3xl w-3" />
              <p>Alex Kostrikin</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-3xl w-3" />
              <p>+397777777</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* Links section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-5">
                  {FooterLinks.map((data) => (
                    <li
                      key={data.id}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-500"
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          @Alex Kostrikin production PetProject!
        </div>
      </div>
    </div>
  );
};

export default Footer;
