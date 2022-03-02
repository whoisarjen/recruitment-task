import axios from "axios";

const useAxios = () => {

    const get = async ({ url }: { url: string }) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_URL}${url}`);
    }

    return { get }
}

export default useAxios;