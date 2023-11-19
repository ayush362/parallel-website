import React, {Dispatch, SetStateAction} from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({menuState}: { menuState: [boolean, Dispatch<SetStateAction<boolean>>] }) => {

    const links = [
        {
            title: "Jobs",
            href: "#jobs-section"
        },
        {
            title: "Startups",
            href: "#startups-section"
        },
        {
            title: "Collection",
            href: "#collection-section"
        },
        // {
        //     title: "Learn",
        //     href: "/"
        // },
    ]

    const [isMenuOpen, setIsMenuOpen] = menuState;


    return (
        <section className="flex container justify-between items-center mx-auto my-5 px-4">
            <div className="flex items-center gap-5">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={120} height={50}/>
                </Link>
                <div className="flex">
                    <ul className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-4 font-bold fixed lg:static z-20 bg-white h-full p-10 lg:p-0 left-0 top-0`}>
                        {links.map((link) => (
                            <li key={link.title}>
                                <Link href={link.href}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex gap-5">
                <button className="btn rounded-2xl">Sign Up</button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Image
                        src="/menu.svg"
                        alt="menu"
                        width={20}
                        height={20}
                        className="lg:hidden"
                    />
                </button>
            </div>
        </section>
    );
};

export default Navbar;
