
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { NavbarProps } from '.';
import usePath from '../../hooks/usePath';

const useNavbar = ({ children }: NavbarProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { path } = usePath()

    return { children, theme, open, setOpen, path }
}

export type useNavbarProps = ReturnType<typeof useNavbar>

export default useNavbar;