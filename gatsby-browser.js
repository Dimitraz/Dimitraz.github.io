// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "fontsource-ibm-plex-mono"

// normalize CSS across browsers
import "./src/normalize.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"
import ThemeProvider from "./src/context/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
