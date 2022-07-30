import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Components ----------------------------------
import MainSectionOutline from "../components/MainSectionOutline";
import SingleProject from "../components/SingleProject";
import SectionHeading from "./../components/SectionHeading";

function Work() {
    // 1) Global States --------------------------------
    const { scrollToWork } = useContext(GlobalContext);

    return (
        <MainSectionOutline refs={scrollToWork}>
            <div className="box-border flex h-auto w-full flex-col gap-8 pb-6 lg:w-4/5">
                <div>
                    <SectionHeading>Somethings We've Build</SectionHeading>
                </div>

                <div className="projects flex flex-col gap-14">
                    <SingleProject
                        projectName={"Spotify Profile"}
                        projectDescription={
                            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                        }
                        img={"./Images/Project1.PNG"}
                        techUsed={["React", "Nodejs", "MongoDB"]}
                    />
                    <SingleProject
                        projectName={"Spotify Profile"}
                        projectDescription={
                            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                        }
                        img={"./Images/Project1.PNG"}
                        techUsed={["React", "Nodejs", "MongoDB"]}
                    />
                    <SingleProject
                        projectName={"Spotify Profile"}
                        projectDescription={
                            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                        }
                        img={"./Images/Project1.PNG"}
                        techUsed={["React", "Nodejs", "MongoDB"]}
                    />
                </div>
            </div>
        </MainSectionOutline>
    );
}

export default Work;
