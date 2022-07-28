import React, { useState } from "react";
import MainSectionOutline from "../components/MainSectionOutline";

import SectionHeading from "./../components/SectionHeading";

function Experience() {
    const [switchButtonAndContent, setSwitchButtonAndContent] = useState({
        Upstatement: false,
        Scout: false,
        Apple: false,
        Starry: false,
        MullenLowe: false,
    });

    function handleButtonSwitching(evt, namee) {
        setSwitchButtonAndContent((prev) => {
            return { Upstatement: false, Scout: false, Apple: false, Starry: false, MullenLowe: false, [namee]: true };
        });
    }

    return (
        <MainSectionOutline>
            <div className="flex w-full flex-col gap-8  md:w-4/5">
                <div>
                    {/* <p className="mb-4 text-3xl font-semibold text-custom-primary-font">Where I’ve Worked</p> */}
                    <SectionHeading>Where We’ve Worked</SectionHeading>
                </div>
                <div className="experience_section flex h-full w-full flex-col gap-4">
                    <div className="buttons box-content flex w-full overflow-x-auto font-normal text-custom-secondary-font">
                        <button
                            className={`h-10 min-w-[9rem] border-custom-primary-button px-5 text-center ${
                                switchButtonAndContent.Upstatement && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "Upstatement")}
                        >
                            Upstatement
                        </button>
                        <button
                            className={`h-10 min-w-[7rem] border-custom-primary-button px-5 text-center transition-all duration-300 hover:text-custom-primary-button ${
                                switchButtonAndContent.Scout && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "Scout")}
                        >
                            Scout
                        </button>
                        <button
                            className={`h-10 min-w-[7rem] border-custom-primary-button px-5 text-center transition-all duration-300 hover:text-custom-primary-button ${
                                switchButtonAndContent.Apple && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "Apple")}
                        >
                            Apple
                        </button>
                        <button
                            className={`h-10 min-w-[7rem] border-custom-primary-button px-5 text-center transition-all duration-300 hover:text-custom-primary-button ${
                                switchButtonAndContent.Upstatement && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "Scout")}
                        >
                            Scout
                        </button>
                        <button
                            className={`h-10 min-w-[7rem] border-custom-primary-button px-5 text-center transition-all duration-300 hover:text-custom-primary-button ${
                                switchButtonAndContent.Starry && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "Starry")}
                        >
                            Starry
                        </button>
                        <button
                            className={`h-10 min-w-[7rem] border-custom-primary-button px-5 text-center transition-all duration-300 hover:text-custom-primary-button ${
                                switchButtonAndContent.MullenLowe && "border-b-2"
                            }`}
                            onClick={(evt) => handleButtonSwitching(evt, "MullenLowe")}
                        >
                            MullenLowe
                        </button>
                    </div>
                    <div className="explain_for_experience flex flex-col gap-2">
                        <p className="about_work_topic text-[20px] font-medium text-custom-primary-font">Engineer @ Upstatement</p>
                        <p className="time text-sm text-custom-secondary-font">May 2018 - Present</p>
                        <ul className="relative flex list-outside flex-col gap-3 py-5 text-custom-secondary-font">
                            <li className="pl-5">Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                            <li className="pl-5">
                                Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
                                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
                            </li>
                            <li className="pl-5">
                                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </MainSectionOutline>
    );
}

export default Experience;
