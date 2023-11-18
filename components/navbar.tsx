import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const links = [
        {
            title: "Jobs",
            href: "/ayush"
        },
        {
            title: "Startups",
            href: "/startups"
        },
        {
            title: "Collection",
            href: "/collection"
        },
        {
            title: "Learn",
            href: "/learn"
        },
    ]

    return (
        <section className="flex container justify-between items-center mx-auto my-5 px-4">
            <div className="flex items-center gap-5">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={120} height={50}/>
                </Link>
                <div className="md:flex  hidden">
                    <ul className="flex gap-4 font-bold">
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
                <Image
                    src="/menu.svg"
                    alt="menu"
                    width={20}
                    height={20}
                    className="md:hidden"
                />
            </div>
        </section>
    );
};

export default Navbar;
