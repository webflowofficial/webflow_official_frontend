import axios from "./axios";

async function fetchSiteData() {
    const response = await axios.get(``, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export { fetchSiteData };
