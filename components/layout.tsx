import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

type LayoutPropsType = { children: React.ReactNode }
export const Layout = ({children}: LayoutPropsType) => {
return (
        <main className="overflow-hidden" >
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}