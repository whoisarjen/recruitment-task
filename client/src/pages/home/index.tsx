import useDevices from "../../hooks/useDevices";
import BaseHome from "./Home";

function Home() {
    const { devices } = useDevices()

    return <BaseHome {...{ devices }} />;
}

export default Home;
