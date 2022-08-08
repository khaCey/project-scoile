import axios from "axios";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { StudentContext } from "../Variables";
import { MoonLoader } from "react-spinners";
import { motion } from "framer-motion";

const StudentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PageContainer = styled.div`
    width: 75%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`;

const TopSection = styled.div`
    width: 98%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TopName = styled.span`
    flex: 100%;
`;

const TopNumber = styled.span`
    flex: 0%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const BottomSection = styled.div`
    width: 100%;
    border-top: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const Student = () => {
    const { currentStudent } = useContext(StudentContext);

    const [fetchResult, setFetchResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            setLoading(true);
            const response = await axios.get(`https://project-scoile-api.herokuapp.com/api/v1/student/id/${currentStudent}`);
            if (response.data.length !== 0) setNoResults(false)
            setFetchResult(response.data[0]);
            setLoading(false);
        }
        fetchStudent();

    }, [currentStudent]);

    return (
        <StudentContainer>
            {loading && (
                <LoadingWrapper>
                    <MoonLoader loading color="#000" size={20} />
                </LoadingWrapper>
            )}
            {!loading && noResults && (
                <LoadingWrapper>
                    <WarningMessage>No Student Found!</WarningMessage>
                </LoadingWrapper>
            )}
            {!noResults && !loading && (
                <PageContainer>
                    <TopSection>
                        <TopName>
                            {fetchResult.lastName + ", " + fetchResult.firstName}
                        </TopName>
                        <TopNumber>
                            {fetchResult.studentID}
                        </TopNumber>
                    </TopSection>
                    <BottomSection>
                        <span>Address: {fetchResult.address}</span>
                        <span>Date of Birth: {fetchResult.dateOfBirth}</span>
                    </BottomSection>
                </PageContainer>
            )
            }

        </StudentContainer >
    )
}
export default Student;