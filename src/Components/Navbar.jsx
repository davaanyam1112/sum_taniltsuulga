import { Button } from "antd";
import React from "react";
const Navbar = () =>{
    const links = [
        {name : "Нүүр хуудас" , link :"/" },
        {name : "Мэдээ мэдээлэл" , link : "/"},
        {name : "Байгууллагууд" , link : "/"},
        {name : "Аялал жуулчлал" , link : "/"},
        {name : "Тендерүүд" , link : "/"},
    ]
    return (
        <div className="shadow-md w-full  top-0 left-0 bg-white">
            <div className="md:flex py-4 items-center justify-end md:px-10 px-7">
                <ul className="md:flex md:items-center">
                    {links.map((e)=>(
                        <li key={e.link} className="md:ml-8 ">
                            <a href = {e.link} className="text-gray-800 hover:text-gray-500 duration-500">{e.name}</a>
                        </li>
                    ))}
                </ul>
                <Button className="md:ml-8">Нэвтрэх</Button>
            </div>
        </div>
    )
}
export default Navbar;