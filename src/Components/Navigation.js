import { useContext } from "react";
import { PageContext, SidebarContext } from './Variables';
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { SidebarData } from "./SidebarData";

const NavigationContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const Sidebar = styled(motion.aside)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: 94vh;
  width: 16vw;
  background-color: #2F4050;
  position: relative;
  top: 6vh;
`;

const SidebarList = styled.ul`
  height: auto;
  width: 100%;
  padding: 0;
  #active{
    background-color: rgba(36, 49, 61, 0.632);
  }
`;

const HideButton = styled.i`
  position: relative;
  color: black;
  right: -0.5vw;
  cursor: pointer;
`;

const SidebarListRow = styled.li`
  color: white;
  width: 100%;
  height: 8vh;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  &:hover{
    cursor: pointer;
    background-color: rgba(36, 49, 61, 0.632);
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled.i`
  flex: 30%;
  display: grid;
  place-items: center;
`;

const NavTitle = styled(motion.span)`
  flex: 70%;
`;

const containerVariants = {
  expanded: {
    width: "16vw",
  },
  collapsed: {
    width: "5vw",
  }
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const Navigation = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const { currentSidebarCollapsed, setCurrentSidebarCollapsed } = useContext(SidebarContext);

  const handlePage = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  }

  const hideSideBar = () => {
    setCurrentSidebarCollapsed(!currentSidebarCollapsed);
  }

  return (
    <NavigationContainer>
      <Sidebar
        animate={currentSidebarCollapsed ? "collapsed" : "expanded"}
        variants={containerVariants}
        transition={containerTransition}
      >
        <HideButton
          className={currentSidebarCollapsed ? "bi bi-caret-right-square-fill" : "bi bi-caret-left-square-fill"}
          onClick={hideSideBar}
        />
        <SidebarList>
          {SidebarData.map((val, key) => {
            return (
              <SidebarListRow
                key={key}
                onClick={event => { handlePage(event, val.location) }}
                id={currentPage === val.location ? "active" : ""}
              >
                <RowContainer>
                  <NavIcon className={val.icon} />
                  <AnimatePresence>
                    {!currentSidebarCollapsed && (
                      <NavTitle
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeIn" }}
                      >
                        {val.title}
                      </NavTitle>
                    )}
                  </AnimatePresence>
                </RowContainer>
              </SidebarListRow>
            )
          })}
        </SidebarList>
      </Sidebar>
      <nav id="navbar" className="navbar">
        <div>

        </div>

      </nav>
    </NavigationContainer >

  );
}
export default Navigation