import axios from "./axios";

async function fetchSiteData() {
    const response = await axios.get(``, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

async function postContactInformation(contactInformation) {
    const response = await axios.post(`/contact`, contactInformation, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export { fetchSiteData, postContactInformation };
