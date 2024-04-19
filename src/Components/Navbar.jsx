import React from "react";

const Navbar = () => {
  const links = [
    { name: "Нүүр хуудас", link: "/" },
    { name: "Сумын тухай", link: "/" },
    { name: "Мэдээ мэдээлэл", link: "/News" },
    { name: "Байгууллагууд", link: "/" },
    { name: "Аялал жуулчлал", link: "/" },
    { name: "Тендерүүд", link: "/" },
  ];
  return (
    <div className="shadow-md w-full  top-0 left-0 bg-blue-900">
      <div className="font-oswald md:flex py-4 items-center md:px-10 px-7">
        <ul className="md:flex md:items-center">
          {links.map((e) => (
            <li key={e.link} className="md:ml-8">
              <a
                href={e.link}
                className="text-white font-roboto hover:text-gray-500 duration-500"
              >
                {e.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
