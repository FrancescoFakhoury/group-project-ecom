import {createGlobalStyle} from "styled-components";

export const breakpoints = {tablet: "600px"};

export default createGlobalStyle`

:root {
    --font-family: "Roboto", sans-serif;
}

html, body {
    margin: 0;
}
`