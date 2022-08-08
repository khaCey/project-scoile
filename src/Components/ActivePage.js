import { useContext } from "react";
import { PageContext, SidebarContext } from "./Variables";
import Dashboard from "./Pages/Dashboard";
import Student from "./Pages/Student"
import AddStudent from "./Pages/AddStudent";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import styled from "styled-components";

const StaticContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    height: 94vh;
    width: 100vw;
    top: -88vh;
    display: flex;
`;

const ActivePageContainer = styled(motion.main)`
    position: relative;
    width: 84vw;
    height: 100%;
    z-index: 11;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SearchbarContainer = styled.div`
    position: absolute;
`;

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`;
const sidebarContainerVariants = {
    expanded: {
        width: "95vw",
    },
    collapsed: {
        width: "84vw",
    }
}

const sidebarContainerTransition = { type: "spring", damping: 22, stiffness: 150 };

const ActivePage = () => {
    const { currentPage } = useContext(PageContext);
    const { currentSidebarCollapsed } = useContext(SidebarContext);

    return (
        <StaticContainer>
            <ActivePageContainer
                animate={currentSidebarCollapsed ? "expanded" : "collapsed"}
                variants={sidebarContainerVariants}
                transition={sidebarContainerTransition}
            >

                <SearchbarContainer>
                    <SearchBar />
                </SearchbarContainer>
                <PageContainer>
                    {currentPage === "Students" && (
                        <Student />
                    )}
                    {currentPage === "Dashboard" && (
                        <Dashboard />
                    )}
                    {currentPage === "AddStudent" && (
                        <AddStudent />
                    )}
                </PageContainer>
            </ActivePageContainer>
        </StaticContainer>
    )
}

export default ActivePage