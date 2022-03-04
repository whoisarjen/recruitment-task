
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { NavbarProps } from '.';
import usePath from '../../hooks/usePath';

const useNavbar = ({ children }: NavbarProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { path } = usePath()
    const [tab, setTab] = useState(path);

    return { children, theme, open, setOpen, tab, setTab }
}

export type useNavbarProps = ReturnType<typeof useNavbar>

export default useNavbar;