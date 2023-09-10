"use client"
import { styled } from "@mui/material";

export const ImageFixer = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height: "100px"
    },
    [theme.breakpoints.up('sm')]: {
        height: "200px"
    },
}));