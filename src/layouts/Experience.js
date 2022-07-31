import React, { useState, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Components ----------------------------------
import ButtonForDifferExperience from "../components/ButtonForDifferExperience";
import MainSectionOutline from "../components/MainSectionOutline";
import SectionHeading from "./../components/SectionHeading";

function Experience() {
    // 1) Global States --------------------------------
    const { siteData, scrollToExperience } = useContext(GlobalContext);

    // 2) Local States / Variables ---------------------------------
    const allButtonContentBool = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
    };
    const [switchButtonAndContent, setSwitchButtonAndContent] = useState({
        ...allButtonContentBool,
        0: true,
    });
    const [contentToShowByIndex, setContentToShowByIndex] = useState(0);

    // Functions ----------------------------------------
    function handleButtonSwitching(evt, indexNumber) {
        setContentToShowByIndex(indexNumber);
        setSwitchButtonAndContent({ ...allButtonContentBool, [indexNumber]: true });
    }

    return (
        <MainSectionOutline refs={scrollToExperience}>
            <div className="flex w-full flex-col gap-8 lg:w-4/5">
                <div>
                    <SectionHeading>Where We’ve Worked</SectionHeading>
                </div>
                <div className="experience_section flex h-full w-full flex-col gap-4 md:flex-row md:gap-8">
                    <div className="buttons box-content flex w-full overflow-x-auto font-normal text-custom-secondary-font md:w-1/4 md:flex-col">
                        {siteData.workedCompaniesDetails.map((singleExperience, ind) => {
                            return (
                                <ButtonForDifferExperience
                                    handleButtonSwitching={handleButtonSwitching}
                                    switchButtonAndContent={switchButtonAndContent}
                                    innerContent={`${ind}`}
                                    minWidth={"min-w-[7rem]"}
                                >
                                    {singleExperience.companyName}
                                </ButtonForDifferExperience>
                            );
                        })}
                    </div>
                    <div className="explain_for_experience flex flex-col gap-2 md:w-3/4 lg:w-full">
                        <p className="about_work_topic text-[20px] font-medium text-custom-primary-font">
                            {siteData.workedCompaniesDetails[contentToShowByIndex].projectName}
                        </p>
                        <p className="role text-base font-medium text-custom-secondary-font">
                            {siteData.workedCompaniesDetails[contentToShowByIndex].role}
                        </p>
                        <p className="time text-base text-custom-secondary-font">
                            {siteData.workedCompaniesDetails[contentToShowByIndex].timePeriod}
                        </p>
                        <ul className="relative flex list-outside flex-col gap-3 py-5 text-custom-secondary-font">
                            {siteData.workedCompaniesDetails[contentToShowByIndex].details.map((detail) => {
                                return (
                                    <li key={Math.random()} className="pl-5">
                                        {detail}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </MainSectionOutline>
    );
}

export default Experience;
