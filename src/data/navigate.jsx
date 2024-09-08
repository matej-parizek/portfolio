import AboutPage from "../components/javascript/main/pages/about/AboutPage"
import DataPage from "../components/javascript/main/pages/DataPage"
import ResumePage from "../components/javascript/main/pages/resume/ResumePage"

export const Nav =[
    {
        id:0,
        link: "/",
        name: "Home",
        style: 'about active',
        page: <AboutPage />
    },
    {
        id:1,
        link: "/resume",
        name: "Resume",
        style: 'about active',
        page: <ResumePage />
    },
    {
        id:2,
        link: "/page",
        name: "Error",
        style: 'about active',
        page: <DataPage />
    },
]