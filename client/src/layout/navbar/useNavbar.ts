
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { NavbarProps } from '.';

const useNavbar = ({ children }: NavbarProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return { children, theme, open, setOpen, selectedIndex, setSelectedIndex }
}

export type useNavbarProps = ReturnType<typeof useNavbar>

export default useNavbar;