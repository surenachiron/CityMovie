"use client"
import { makeStyles } from "@mui/styles"
import { styled } from '@mui/material/styles';

export const useStyles = makeStyles({
    typograhyh5: {
        marginTop: "2rem",
        marginBottom: "10px"
    },
})

export const ImageFixer = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height: "100px"
    },
    [theme.breakpoints.up('sm')]: {
        height: "200px"
    },
}));