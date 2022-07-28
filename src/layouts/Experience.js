import React, { useState } from "react";
import ButtonForDifferExperience from "../components/ButtonForDifferExperience";
import MainSectionOutline from "../components/MainSectionOutline";

import SectionHeading from "./../components/SectionHeading";

function Experience() {
    const allButtonContentBool = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    };

    const [switchButtonAndContent, setSwitchButtonAndContent] = useState({
        ...allButtonContentBool,
        1: true,
    });

    function handleButtonSwitching(evt, namee) {
        setSwitchButtonAndContent({ ...allButtonContentBool, [namee]: true });
    }

    return (
        <MainSectionOutline>
            <div className="flex w-full flex-col gap-8 lg:w-4/5">
                <div>
                    <SectionHeading>Where We’ve Worked</SectionHeading>
                </div>
                <div className="experience_section flex h-full w-full flex-col gap-4 md:flex-row md:gap-8">
                    <div className="buttons box-content flex w-full overflow-x-auto font-normal text-custom-secondary-font md:w-1/4 md:flex-col">
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="1"
                            minWidth={"min-w-[7rem]"}
                        >
                            Upstatement
                        </ButtonForDifferExperience>
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="2"
                            minWidth={"min-w-[6rem]"}
                        >
                            Scout
                        </ButtonForDifferExperience>
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="3"
                            minWidth={"min-w-[6rem]"}
                        >
                            Apple
                        </ButtonForDifferExperience>
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="4"
                            minWidth={"min-w-[6rem]"}
                        >
                            Scout
                        </ButtonForDifferExperience>
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="5"
                            minWidth={"min-w-[6rem]"}
                        >
                            Starry
                        </ButtonForDifferExperience>
                        <ButtonForDifferExperience
                            handleButtonSwitching={handleButtonSwitching}
                            switchButtonAndContent={switchButtonAndContent}
                            innerContent="6"
                            minWidth={"min-w-[7rem]"}
                        >
                            MullenLowe
                        </ButtonForDifferExperience>
                    </div>
                    <div className="explain_for_experience flex flex-col gap-2 md:w-3/4 lg:w-full">
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
