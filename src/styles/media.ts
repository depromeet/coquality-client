const breakpoints = [960, 780]
export const mobile = breakpoints.map((bp) => `@media (max-width: ${bp}px)`)[1]
export const tablet = breakpoints.map((bp) => `@media (max-width: ${bp}px)`)[0]
