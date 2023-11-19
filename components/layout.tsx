import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, {useState} from "react";

type LayoutPropsType = { children: React.ReactNode }
export const Layout = ({children}: LayoutPropsType) => {
    const menuState = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = menuState;
    return (
        <main
            className="overflow-hidden"
        >
            <Navbar menuState={menuState}/>
            <div
                className={`${isMenuOpen ? "opacity-50" : ""}`}
                onClick={() => {
                    if (isMenuOpen) {
                        setIsMenuOpen(false)
                    }
                }}
            >
                {children}
                <Footer/>
            </div>
        </main>
    )
}