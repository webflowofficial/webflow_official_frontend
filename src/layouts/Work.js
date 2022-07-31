import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Components ----------------------------------
import MainSectionOutline from "../components/MainSectionOutline";
import SingleProject from "../components/SingleProject";
import SectionHeading from "./../components/SectionHeading";

function Work() {
    // 1) Global States --------------------------------
    const { siteData, scrollToWork } = useContext(GlobalContext);

    return (
        <MainSectionOutline refs={scrollToWork}>
            <div className="box-border flex h-auto w-full flex-col gap-8 pb-6 lg:w-4/5">
                <div>
                    <SectionHeading>Somethings We've Build</SectionHeading>
                </div>

                <div className="projects flex flex-col gap-14">
                    {siteData.featuredProjectsDetails.map((singleProject, ind) => {
                        return (
                            <SingleProject
                                key={Math.random()}
                                projectName={singleProject.projectName}
                                projectDescription={singleProject.projectDescription}
                                img={"./Images/Project1.PNG"}
                                techUsed={singleProject.projectTechnologies}
                                flexDirection={ind % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                            />
                        );
                    })}
                </div>
            </div>
        </MainSectionOutline>
    );
}

export default Work;
