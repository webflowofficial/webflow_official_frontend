import React, { useState } from "react";
import MainSectionOutline from "../components/MainSectionOutline";

import SectionHeading from "./../components/SectionHeading";

function Contact() {
    const [contactDetails, setContactDetails] = useState({
        name_of_person: "",
        email_of_person: "",
        message: "",
    });

    function handleOnChange(evt) {
        const { name, value } = evt.target;
        setContactDetails((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmitContactDetails(evt) {
        evt.preventDefault();
        // Send data to API
        if (contactDetails.name_of_person !== " " && contactDetails.email_of_person !== "" && contactDetails.message !== "") {
            console.log(contactDetails);
            setContactDetails({ name_of_person: "", email_of_person: "", message: "" });
        }
    }

    return (
        <MainSectionOutline>
            <div className="flex w-screen flex-col items-center gap-8 lg:w-4/5 sm-max:gap-12">
                {/* <p className="text-4xl font-bold leading-none text-custom-primary-font md:text-4xl lg:text-5xl sm-max:text-3xl">Get In Touch</p> */}
                <SectionHeading>Get in Touch</SectionHeading>
                <form onSubmit={(evt) => handleSubmitContactDetails(evt)} className="form_input flex w-full flex-col items-center gap-9">
                    <div className="relative flex w-1/2 items-center justify-center md-max:w-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="rgb(100,255,218)"
                            className="relative right-[-36px]"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <input
                            className="box-border h-11 w-full rounded-md border border-custom-primary-button bg-transparent pl-12 text-base text-custom-primary-font outline-none transition-all duration-150 focus:bg-custom-secondary-button"
                            type="text"
                            value={contactDetails.name_of_person}
                            name="name_of_person"
                            placeholder="Name"
                            autoCorrect="off"
                            onChange={handleOnChange}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="relative flex w-1/2 items-center md-max:w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="rgb(100,255,218)"
                            className="relative right-[-36px]"
                            viewBox="0 0 16 16"
                        >
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                        <input
                            className="box-border h-11 w-full rounded-md border border-custom-primary-button bg-transparent pl-12 text-base text-custom-primary-font outline-none transition-all duration-150 focus:bg-custom-secondary-button"
                            type="email"
                            value={contactDetails.email_of_person}
                            name="email_of_person"
                            placeholder="Email"
                            autoCorrect="off"
                            onChange={handleOnChange}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="relative flex w-1/2 md-max:w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="rgb(100,255,218)"
                            className="relative right-[-36px] top-[18px]"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <textarea
                            className="box-border w-full resize-none rounded-md border border-custom-primary-button bg-transparent pt-4 pl-12 text-base text-custom-primary-font outline-none transition-all duration-150 focus:bg-custom-secondary-button"
                            placeholder="Message"
                            autoCorrect="off"
                            cols="30"
                            rows="6"
                            value={contactDetails.message}
                            onChange={handleOnChange}
                            name="message"
                            autoComplete="off"
                            required
                        ></textarea>
                    </div>

                    <div className="relative flex w-1/2 justify-end md-max:w-full">
                        <button className="box-border rounded-md border border-custom-primary-button bg-custom-primary-button px-7 py-1 text-lg font-medium text-black transition-all duration-150 active:bg-custom-secondary-button active:text-custom-primary-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </MainSectionOutline>
    );
}

export default Contact;
