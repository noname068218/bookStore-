import Logo from "../../assets/website/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl
            sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo Site " className="w-10" />
              Books
            </a>
          </div>
          <div>
            <ul className="flex gap-4 items-center hidden">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
