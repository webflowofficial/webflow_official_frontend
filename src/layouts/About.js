import React, { useContext } from "react";
import MainSectionOutline from "../components/MainSectionOutline";
import GlobalContext from "../context/GlobalContext";

import SectionHeading from "./../components/SectionHeading";

function About() {
    const { scrollToAbout } = useContext(GlobalContext);

    return (
        // <div
        //     ref={scrollToAbout}
        //     className={`box-border flex min-h-[calc(100vh-80px)] w-[calc(100vw-6px)] flex-wrap justify-center overflow-x-hidden bg-custom-primary-background px-10 pt-7 sm-max:w-screen sm-max:pt-5 md-max:pr-3 md-max:pl-5`}
        // >
        <MainSectionOutline refs={scrollToAbout}>
            <div className="box-border flex w-screen flex-col gap-6 pr-3 md:w-[46%] sm-max:gap-3">
                {/* <p className="mb-4 text-3xl font-semibold text-custom-primary-font">About Us</p> */}
                {/* <p className="text-3xl font-bold leading-none text-custom-primary-font md:text-4xl lg:text-5xl">About Us</p> */}
                <SectionHeading>About Us</SectionHeading>
                <p className=" text-custom-secondary-font md:text-lg">
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in
                    2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
                    HTML & CSS!
                </p>
                <p className=" text-custom-secondary-font md:text-lg">
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a
                    student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at
                    Upstatement for a variety of clients.
                </p>
                <p className=" text-custom-secondary-font md:text-lg">
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </p>
            </div>
            <div className="box-border flex w-full items-start md:w-[34%] sm-max:my-12 md-max:justify-center">
                <img className="w-80 sm-max:h-60 sm-max:w-60 " src="./Images/Complete Logo.png" alt="LOGO" />
            </div>
        </MainSectionOutline>

        // </div>
    );
}

export default About;
