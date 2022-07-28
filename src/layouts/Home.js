import React, { useContext } from "react";
import MainSectionOutline from "../components/MainSectionOutline";
import GlobalContext from "../context/GlobalContext";

function Home() {
    const { headerHeight } = useContext(GlobalContext);
    return (
        // <div
        //     className={`box-border flex h-[calc(100vh-80px)] w-[calc(100vw-6px)] justify-center bg-custom-primary-background px-10 pt-7 sm-max:w-screen sm-max:pt-5 md-max:pr-3 md-max:pl-5`}
        // >
        <MainSectionOutline>
            <div className="flex w-screen flex-col gap-6 lg:w-4/5 sm-max:gap-3">
                <p className="text-custom-primary-button">Hi, my name is</p>
                <p className="font-bold leading-none text-custom-primary-font xsm:text-5xl md:text-6xl lg:text-7xl sm-max:text-3xl">
                    Brittany Chiang.
                </p>
                <p className="font-bold leading-none text-custom-primary-font xsm:text-5xl md:text-6xl lg:text-7xl sm-max:text-3xl">
                    I build things for the web.
                </p>
                <p className="text-lg text-custom-secondary-font lg:w-3/5 sm-max:text-base">
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m
                    focused on building accessible, human-centered products at Upstatement.
                </p>
                <div>
                    <button className="mt-4 rounded border-[1px] border-custom-primary-button p-4 px-6 text-custom-primary-button sm-max:mt-8">
                        Check out our Projects
                    </button>
                </div>
            </div>
        </MainSectionOutline>

        // </div>
    );
}

export default Home;
