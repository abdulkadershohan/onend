import { Menu } from "lucide-react";
import MobileNav from "./mobile-nav";

type Menu = {
    title: string;
    url: string;
};

const menu: Menu[] = [
    {
        title: "Work",
        url: "#work",
    },
    {
        title: "Services",
        url: "#services",
    },
    {
        title: "About",
        url: "#about",
    },
    {
        title: "Contact",
        url: "#contact",
    },
];

export default function Navbar() {
    return (
        <div className="bg-gray-950">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-4">
                    <img src="/logo.png" alt="Logo" className="h-[3.25rem] w-[7.6875rem]" />
                    <div className="text-white">
                        <MobileNav menu={menu} />
                    </div>
                    <div className="space-x-4 hidden md:flex">
                        {menu.map((item) => (
                            <a
                                key={item.title}
                                href={item.url}
                                className="text-white hover:text-gray-300 font-medium leading-5 uppercase"
                            >
                                {item.title}
                            </a>
                        ))}

                    </div>
                </div>
                {/* mobile menu */}


            </div>
        </div>
    );
}
