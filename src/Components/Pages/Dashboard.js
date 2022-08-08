import { useContext } from "react";
import { PageContext } from "../Variables";
import styled from "styled-components";

const Main = styled.main`
    border: 2px solid red;
`;

const Container = styled.div`
    border: 2px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 50%;
`;

const Dashboard = () => {
    const { currentPage } = useContext(PageContext);

    return (
        <Main>
            <Container>
                <div className="pagetitle">
                    <h1>{currentPage}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index">Home</a></li>
                            <li className="breadcrumb-item active">{currentPage}</li>
                        </ol>
                    </nav>
                </div>
                <Section className="section dashboard">
                    <div className="row">
                        <div className="">
                            <div className="row">


                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Sales <span>| Today</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Revenue <span>| This Month</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>$3,264</h6>
                                                    <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xxl-4 col-xl-12">

                                    <div className="card info-card customers-card">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Customers <span>| This Year</span></h5>

                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>1244</h6>
                                                    <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-12">
                                    <div className="card">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div className="card-body">
                                            <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><a href="index">#2457</a></th>
                                                        <td>Brandon Jacob</td>
                                                        <td><a href="index" className="text-primary">At praesentium minu</a></td>
                                                        <td>$64</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="index">#2147</a></th>
                                                        <td>Bridie Kessler</td>
                                                        <td><a href="index" className="text-primary">Blanditiis dolor omnis similique</a></td>
                                                        <td>$47</td>
                                                        <td><span className="badge bg-warning">Pending</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="index">#2049</a></th>
                                                        <td>Ashleigh Langosh</td>
                                                        <td><a href="index" className="text-primary">At recusandae consectetur</a></td>
                                                        <td>$147</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="index">#2644</a></th>
                                                        <td>Angus Grady</td>
                                                        <td><a href="index" className="text-primar">Ut voluptatem id earum et</a></td>
                                                        <td>$67</td>
                                                        <td><span className="badge bg-danger">Rejected</span></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><a href="index">#2644</a></th>
                                                        <td>Raheem Lehner</td>
                                                        <td><a href="index" className="text-primary">Sunt similique distinctio</a></td>
                                                        <td>$165</td>
                                                        <td><span className="badge bg-success">Approved</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">

                                        <div className="filter">
                                            <a className="icon" href="index" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a className="dropdown-item" href="index">Today</a></li>
                                                <li><a className="dropdown-item" href="index">This Month</a></li>
                                                <li><a className="dropdown-item" href="index">This Year</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </Section>
            </Container>

        </Main>
    )
}

export default Dashboard
