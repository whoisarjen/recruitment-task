import BaseNavbar from "./Navbar";
import useNavbar from "./useNavbar";

export interface NavbarProps {
    children: any
}

const Navbar = ({ children }: NavbarProps) => {
    const props = useNavbar({ children })

    return <BaseNavbar {...props} />
}

export default Navbar;