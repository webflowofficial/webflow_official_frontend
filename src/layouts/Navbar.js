import React, { useState } from "react";

function Navbar() {
    // Font size for Mobile : 16
    // Font size for PC : 20

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
        <nav className="flex h-20 bg-custom-primary-background items-center justify-between">
            <div className="logo_outside_div w-1/4 box-border">
                <div className="box-border pl-12 md-max:pl-7">
                    <img className="w-16" src="./Images/Logo.png" alt="LOGO" />
                </div>
            </div>

            <div className="other_nav_items w-[50%] flex justify-end">
                <div className="hidden justify-evenly w-4/6 font-sans font-normal md:flex text-custom-primary-font">
                    <p className="hover:text-custom-primary-button transition-all duration-200">About</p>
                    <p className="hover:text-custom-primary-button transition-all duration-200">Experience</p>
                    <p className="hover:text-custom-primary-button transition-all duration-200">Work</p>
                    <p className="hover:text-custom-primary-button transition-all duration-200">Contact</p>
                </div>

                <button className="flex box-border w-full pr-12 md-max:pr-8 justify-end md:hidden">
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
                        className={`bg-custom-primary-background h-screen absolute top-0 w-3/4 ${!inAnimation && "scale-out-hor-right"} ${
                            inAnimation && "scale-in-hor-right"
                        }`}
                    >
                        <button className="flex box-border w-full pr-7 justify-end pt-6 mb-20">
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

                        <div className="w-full h-1/3 flex flex-col justify-between items-center text-xl md-max:text-base text-custom-primary-font">
                            <p className="hover:text-custom-primary-button transition-all duration-200">About</p>
                            <p className="hover:text-custom-primary-button transition-all duration-200">Experience</p>
                            <p className="hover:text-custom-primary-button transition-all duration-200">Work</p>
                            <p className="hover:text-custom-primary-button transition-all duration-200">Contact</p>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
