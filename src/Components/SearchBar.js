import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { IoSearch, IoClose, IoPersonAddSharp } from "react-icons/io5";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { MoonLoader } from "react-spinners";
import { PageContext, StudentContext } from "./Variables"


const ComponentContainer = styled.div`  
    margin-top: 1em;
    margin-bottom: 1em;
    display : flex;
    flex-direction: row;
`;

const SearchContainer = styled(motion.div)`
    background-color: white;
    border: 1px solid #bebebe;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    z-index: 99;
`;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    max-width:50vw;
`;

const SearchBarInput = styled.input`
    outline: none;
    border: none;
    width: 50vw;
    padding: 5px;
    padding-left: 1vw;
    padding-right: 1vw;

    &:focus{
        online: none;
    }
    &placeholder {
        color: #bebebe;
        transition: all 250ms ease-in-out;
    }
`;

const CloseIcon = styled(motion.span)`
    color: #bebebe;
    margin: 0.5em;
    transition: all 200ms ease-in-out; 
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
        color: #dfdfdf;
    }
`;

const SearchIcon = styled.span`
    color: #bebebe;
    margin: 0.5em;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
        color: #dfdfdf;
        
        
    }
`;

const LoadingWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WarningMessage = styled.span`
    color: #a1a1a1;
    display: flex;
    align-self: center;
    justify-self: center;
`;

const SearchContent = styled.ul`
    width: auto;
    height: 12.8em;
    margin: 0;
    padding: 0;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 0.5vw;
    }
`;

const AddStudent = styled.div`
    height: 2.3em;
    width: 5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #bebebe;
    border: 1px solid #bebebe;
    margin-left: 2.5vw;
    background-color: white;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    &:hover{
        cursor:pointer;
        color: #dfdfdf;
    }
`;

const containerVariants = {
    expanded: {
        height: "15em",
    },
    collapsed: {
        height: "2.3em",
    }
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150, ease: "easeInOut" };

const SearchBar = () => {
    const { setCurrentStudent } = useContext(StudentContext);
    const { setCurrentPage } = useContext(PageContext);

    const [parentRef, isClickedOutside] = useClickOutside();
    const searchRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [result, setResult] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const isEmpty = !result || result.length === 0;

    const focusSearch = () => {
        searchRef.current.focus();
        setExpanded(true);
    }

    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    const handleStudent = (event, studentID) => {
        event.preventDefault();
        setCurrentPage('Students');
        setCurrentStudent(studentID);
        collapseContainer();
    }

    useEffect(() => {
        setLoading(true);
        setNoResults(false);

        const fetchAllStudents = async () => {
            const response = await axios.get(`https://project-scoile-api.herokuapp.com/api/v1/student`);
            if (response.data) { if (response.data && response.data.length === 0) setNoResults(true) };
            setResult(response.data);
            setLoading(false);
            setNoResults(false);

            return
        }
        const fetchStudents = async () => {
            const response = await axios.get(`https://khacey.herokuapp.com/api/v1/student/${searchQuery}`);
            if (response.data) { if (response.data && response.data.length === 0) setNoResults(true) };
            setResult(response.data);

            setLoading(false);
        }




        if (searchQuery.length > 2 && searchQuery !== 'all') fetchStudents();
        else if (searchQuery === 'all') fetchAllStudents();



        if (searchQuery.length === 0) {
            setResult([]);
            setLoading(false);
            setNoResults(false);
        };

    }, [searchQuery])

    const handleAddStudent = (event) => {
        event.preventDefault();
        setCurrentPage("AddStudent");
    }

    const expandContainer = () => {
        setExpanded(true);
    };

    const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("");
        setResult([]);
        if (searchRef.current) searchRef.current.value = "";
    };

    return (
        <ComponentContainer>
            <SearchContainer
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={containerVariants}
                transition={containerTransition}
                ref={parentRef}
            >
                <SearchBarContainer>
                    <SearchIcon>
                        <IoSearch
                            className="searchBarIcon"
                            onClick={focusSearch} />
                    </SearchIcon>
                    <SearchBarInput
                        type="text"
                        className="searchbar"
                        placeholder="Search"
                        ref={searchRef}
                        onFocus={expandContainer}
                        onChange={event => setSearchQuery(event.target.value)}
                    />
                    <AnimatePresence>
                        {isExpanded && (
                            <CloseIcon
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={collapseContainer}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <IoClose />
                            </CloseIcon>
                        )}
                    </AnimatePresence>
                </SearchBarContainer>
                {isExpanded && (
                    <SearchContent>
                        {isLoading && (
                            <LoadingWrapper>
                                <MoonLoader loading color="#000" size={20} />
                            </LoadingWrapper>
                        )}
                        {!isLoading && isEmpty && !noResults && (
                            <AnimatePresence>
                                <LoadingWrapper
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.2, ease: "easeIn" }}
                                >
                                    <WarningMessage>Type to Search</WarningMessage>
                                </LoadingWrapper>
                            </AnimatePresence>

                        )}
                        {!isLoading && noResults && (
                            <LoadingWrapper>
                                <WarningMessage>No Student Found!</WarningMessage>
                            </LoadingWrapper>
                        )}

                        {result.map((val) => {
                            return (
                                <li key={val.studentID} className="searchResultRow" onClick={event => { handleStudent(event, val.studentID) }} >
                                    <span className="lastName">{val.lastName}</span>
                                    <span className="firstName">{val.firstName}</span>
                                    <span className="address">{val.address}</span>
                                    <span className="studentID">{val.studentID}</span>
                                </li>
                            )
                        })}
                    </SearchContent>
                )}
            </SearchContainer >
            <AddStudent
                onClick={event => handleAddStudent(event)}
            >
                <IoPersonAddSharp className="addIcon" />
            </AddStudent>
        </ComponentContainer>
    )
}
export default SearchBar
