import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Navbar() {
    // Font size for Mobile : 16
    // Font size for PC : 16 , 18

    // PC px : 10 (40px)
    // Mobilepx : 3 (12px)

    // Width of section(Navbar, Home etc.) : 100vw-6px

    // 1) Global States --------------------------------
    const { scrollToAbout } = useContext(GlobalContext);

    // 1) Local States --------------------------------

    const [menuShowOrHide, setMenuShowOrHide] = useState("hide");
    const [inAnimation, setInAnimation] = useState(true);

    const iconHeightAndWeight = "34";

    function handleEnableMenu() {
        setInAnimation(true);
        setMenuShowOrHide("show");
    }
    function handleDisableMenu() {
        setInAnimation(false);
        setTimeout(() => {
            setMenuShowOrHide("hide");
        }, 200);
    }

    return (
        <nav className="box-border flex h-20 w-[calc(100vw-6px)] items-center bg-custom-primary-background px-10 sm-max:w-screen md-max:pr-3 md-max:pl-5">
            <div className="logo_outside_div box-border w-1/4">
                <div className="box-border">
                    <img className="w-16" src="./Images/Logo.png" alt="LOGO" />
                </div>
            </div>

            <div className="other_nav_items flex w-3/4 justify-end">
                <div className="hidden w-[50%] min-w-[30rem] justify-evenly font-sans font-normal text-custom-primary-font md:flex">
                    <p
                        className="transition-all duration-200 hover:text-custom-primary-button"
                        onClick={() => scrollToAbout.current.scrollIntoView({ behavior: "smooth" })}
                    >
                        About
                    </p>
                    <p className="transition-all duration-200 hover:text-custom-primary-button">Experience</p>
                    <p className="transition-all duration-200 hover:text-custom-primary-button">Work</p>
                    <p className="transition-all duration-200 hover:text-custom-primary-button">Contact</p>
                </div>

                <button className="box-border flex w-full justify-end md:hidden">
                    <svg
                        width={iconHeightAndWeight}
                        height={iconHeightAndWeight}
                        fill="rgb(100,255,218)"
                        className="bi bi-list"
                        viewBox="0 0 16 16"
                        onClick={handleEnableMenu}
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </button>

                {menuShowOrHide === "show" && (
                    <div
                        className={`absolute right-0 top-0 h-screen w-3/4 bg-custom-primary-background ${!inAnimation && "scale-out-hor-right"} ${
                            inAnimation && "scale-in-hor-right"
                        }`}
                    >
                        <button className="mb-20 box-border flex w-full justify-end pt-6 pr-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={String(Number(iconHeightAndWeight) + 10)}
                                height={String(Number(iconHeightAndWeight) + 10)}
                                fill="rgb(100,255,218)"
                                className={`${inAnimation && "rotate-in-center"} ${!inAnimation && "rotate-out-center"}`}
                                viewBox="0 0 16 16"
                                onClick={handleDisableMenu}
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>

                        <div className="flex h-1/3 w-full flex-col items-center justify-between text-xl text-custom-primary-font md-max:text-base">
                            <p className="transition-all duration-200 hover:text-custom-primary-button">About</p>
                            <p className="transition-all duration-200 hover:text-custom-primary-button">Experience</p>
                            <p className="transition-all duration-200 hover:text-custom-primary-button">Work</p>
                            <p className="transition-all duration-200 hover:text-custom-primary-button">Contact</p>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
