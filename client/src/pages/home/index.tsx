import { useAppSelector } from "../../hooks/useRedux";
import BaseHome from "./Home";

function Home() {
    const devices = useAppSelector(state => state.device.all)

    return <BaseHome {...{ devices }} />;
}

export default Home;
