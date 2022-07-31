import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Components ----------------------------------
import MainSectionOutline from "../components/MainSectionOutline";
import SectionHeading from "./../components/SectionHeading";

function About() {
    // 1) Global States --------------------------------
    const { scrollToAbout, siteData } = useContext(GlobalContext);

    return (
        <MainSectionOutline refs={scrollToAbout}>
            <div className="box-border flex w-screen flex-col gap-6 pr-3 lg:w-[46%] sm-max:gap-3">
                <SectionHeading>About Us</SectionHeading>
                <p className=" text-custom-secondary-font md:text-lg">
                    {`${siteData.aboutUsText.split(":")[0]} \n ${siteData.aboutUsText.split(":")[1]}`}
                </p>
                {/* <p className=" text-custom-secondary-font md:text-lg">
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a
                    student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at
                    Upstatement for a variety of clients.
                </p>
                <p className=" text-custom-secondary-font md:text-lg">
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </p> */}
            </div>
            <div className="box-border flex w-full items-start md:w-[34%] sm-max:my-12 md-max:justify-center">
                <img className="w-80 sm-max:h-60 sm-max:w-60 " src="./Images/Complete Logo.png" alt="LOGO" />
            </div>
        </MainSectionOutline>
    );
}

export default About;
