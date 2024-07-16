import { styled } from '@mui/material'
// import {styled, Link as LinkComponent} from '@mui/material'
import { Link as LinkComponent } from 'react-router-dom'


export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    position: 'absolute',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

