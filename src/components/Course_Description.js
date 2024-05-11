import React, { useState } from 'react'
//import './Relevantz.png'
import { FaBars, FaBookOpenReader, FaDeleteLeft } from "react-icons/fa6";
import { FaSearch, FaUserGraduate, FaHome, FaChartBar } from "react-icons/fa";
import Draggable from 'react-draggable';
import { FaPlus, FaBell, FaUser, FaChevronUp } from 'react-icons/fa';
import { FaPlay, FaVideo, FaMusic, FaFilePdf, FaFilePowerpoint, FaFileAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import '../styles/Course_Description.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import CourseCreationForm from './Content_Page';
const Navbars = () => {
    const [showSideNav, setShowSideNav] = useState(false);
    const [activePage, setActivePage] = useState('home');


    const [showReportDropdown, setShowReportDropdown] = useState(false);
    const handlePageChange = (page) => {
        setActivePage(page);
        if (!showSideNav) {
            setShowSideNav(true);
        }
        if (page === 'reports') {
            setShowReportDropdown(!showReportDropdown);
        }
        if (showReportDropdown) setShowReportDropdown(!showReportDropdown);
    };

    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    }; 
   
    const [showPopup, setShowPopup] = useState(false);
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoRS8_GQ4JJoTPipqgS9jWlOHY2K6sr1bUrtDVgpXZQ&s';
    const [showModal, setShowModal] = useState(false);

    const handleViewClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [isActive, setIsActive] = useState(true); // Initial state: active

    const handleToggle = () => {
        setIsActive(!isActive); // Toggle the state
    };

    return (
        <div className="dashboard">
            <div className='top-nav'>
                <button className="menu-btn" onClick={toggleSideNav}>
                    <FaBars />
                </button>
                <div className='nav-img'>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcxEF2d6izYkyw940E-26faIrWT4ikbikzQv_IGNA&s'} />
                </div>

                <div className="user-info">

                    <FaSearch className="icon plus-icon" style={{ fontSize: "17px" }} />
                    <FaPlus className="icon plus-icon" style={{ fontSize: "17px" }} />
                    <FaBell className="icon notification-icon" style={{ fontSize: '17px' }} />
                    <FaUser className="icon profile-icon" style={{ fontSize: '17px' }} />

                </div>

            </div>
            <div className={`side-nav ${showSideNav ? 'open' : ''}`}>
                <ul>
                    <li className={activePage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>
                        <FaHome className='icon' /> {/* Icon for Home */}
                        {showSideNav && <span>Home</span>}
                    </li>
                    <li className={activePage === 'course' ? 'active' : ''} onClick={() => handlePageChange('course')}>
                        <FaBookOpenReader className='icon' /> {/* Icon for Submit Request */}
                        {showSideNav && <span>Course</span>}
                    </li>
                    <li
                        className={activePage === 'learner' ? 'active' : ''}
                        onClick={() => handlePageChange('learner')}
                    >
                        <FaUserGraduate className='icon' /> {/* Icon for Tracking */}
                        {showSideNav && <span>Learner</span>}
                    </li>
                    <li className='reports' onClick={() => handlePageChange('reports')}>
                        <FaChartBar className='icon' />
                        {showSideNav && <span>Reports</span>}


                    </li>
                </ul>
                <ul className={`submenu ${showReportDropdown ? 'open' : ''}`}>
                    <li onClick={() => setActivePage('learnerreport')}> Learner Report</li>
                    <li onClick={() => setActivePage('coursereport')}>Course Report</li>
                    <li onClick={() => setActivePage('enroll')}>Enrollment Report</li>
                    <li onClick={() => setActivePage('quiz')}>Quiz Report</li>
                </ul>
            </div>
            {/* ------------------------------------------------------------------------------------ */}

            <div className="course-creation-page" style={{ display: 'grid', width: '100%', height: '100vh' }}>

                <div className="container" style={{ marginTop: '50px', width: '1054px', height: '640px' }}>
                    {/* Rest of your code */}     <div className="form-container" style={{ width: '1010px', height: '600px' }} >
                        <div className="course-creation-form" style={{ width: '900px' }}>
                            <div className="content" style={{ width: '1010px' }}>
                                <main className="main-content" style={{ paddingRight: '80px' }}>
                                    <h1 style={{ paddingRight: '410px' }}>HTML Tutorial for Beginners</h1><hr />
                                    <div className="course-details">
                                        <div className="course-header" style={{ marginLeft: '760px' }}>
                                            <FaEdit className="edit-icon" style={{ fontSize: '20px', color: "blue", marginRight: '20px' }} />
                                            <RiDeleteBin5Line className="edit-icon" style={{ fontSize: '20px', color: "red" }} />
                                        </div>
                                        <div className="course-info">
                                            <p style={{ paddingRight: '280px' }}>Course Category <span className="info-value" style={{ paddingLeft: '150px' }}>: Technical</span></p>
                                            <p style={{ paddingRight: '280px' }}>Course Level <span className="info-value" style={{ paddingLeft: '179px' }}>: Beginner</span></p>
                                            <p style={{ paddingRight: '290px' }}>Course Duration <span className="info-value" style={{ paddingLeft: '160px' }}>: 3 Days</span></p>
                                        </div>
                                        <div className="course-description">
                                            <p style={{ paddingLeft: '89px' }}>Course Description<span style={{ paddingLeft: '139px' }}>: Have you ever wanted to learn HTML and CSS but
                                                it was too <span style={{ paddingLeft: '258px' }}>hard or did not have time or money? </span></span>


                                                <button
                                                    className="btn"
                                                    style={{
                                                        width: '119px',
                                                        height: '33px',
                                                        color: 'blue',
                                                        backgroundColor: '#D9D9D9', marginLeft: '10px', width: '121px',
                                                        height: '32px',
                                                        gap: '0px',
                                                        borderradius: '4px 0px 0px 0px',
                                                        opacity: ' 1'
                                                    }}
                                                    onClick={() => setShowPopup(true)}
                                                >
                                                    Show More
                                                </button>

                                                {showPopup && (
                                                    <div style={{
                                                        position: 'fixed',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        backgroundColor: 'white',
                                                        padding: '20px',
                                                        zIndex: 1000, width: '705px'
                                                    }}><h1>Course Description</h1><hr /><p>
                                                            Have you ever wanted to learn HTML and CSS but thought it was too hard or did not have time or money?
                                                            This step-by-step HTML and CSS course will help you learn coding fast and with an instructor that really cares about his students.
                                                            Learning to code will help you make more money in your job, or even find a better job, or better yet, get a nice job as a web developer.
                                                            HTML and CSS are the foundations you need to get into any programming language.</p><br /><br />

                                                        <button onClick={() => setShowPopup(false)} style={{
                                                            backgroundColor: 'red', width: '121px',
                                                            height: '32px',
                                                            gap: '0px',
                                                            borderradius: '4px 0px 0px 0px',
                                                            opacity: ' 1', marginLeft: '530px'
                                                        }}>Close</button>
                                                    </div>
                                                )}

                                                {showPopup && (
                                                    <div style={{
                                                        position: 'fixed',
                                                        top: 0,
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                                        zIndex: 999
                                                    }} onClick={() => setShowPopup(false)} />
                                                )}
                                            </p>

                                        </div>
                                        <div className="course-dates">
                                            <p style={{ paddingRight: '260px' }}>Course Created <span className="date-value" style={{ paddingLeft: '160px' }}>: 20/05/2022</span></p>
                                            <p style={{ paddingRight: '255px' }}>Course Modified <span className="date-value" style={{ paddingLeft: '160px' }}>: 21/05/2022</span></p>
                                        </div>
                                        <div className="course-thumbnail" style={{ paddingRight: '210px' }}>Course Thumbail

                                            <button className="btn" onClick={handleViewClick} style={{
                                                marginLeft: '160px', backgroundColor: '#D9D9D9', color: 'blue', width: '121px',
                                                height: '32px',
                                                gap: '0px',
                                                borderradius: '4px 0px 0px 0px',
                                                opacity: ' 1'
                                            }}>

                                                View
                                            </button>
                                            {showModal && (
                                                <div className="modal">
                                                    <div className="modal-content">
                                                        <img src={imageUrl} alt="Course Thumbnail"></img>
                                                        <button className="close-btn" onClick={handleCloseModal}>
                                                            X
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div><br /><br />
                                        <div className="course-actions">
                                            < a href='/content-creation' style={{ textDecoration: 'none', color: 'white' }}>
                                                <button
                                                    className={`content-btn ${isActive ? 'active' : 'inactive'}`}
                                                    style={{ backgroundColor: 'blue', marginLeft: '585px' }}
                                                    onClick={CourseCreationForm}
                                                >
                                                    Content
                                                </button></a>
                                            <button
                                                className={`inactive-btn ${isActive ? 'inactive' : 'active'}`}
                                                onClick={handleToggle} style={{ width: '123px' }}
                                            >
                                                {isActive ? 'Make Inactive' : 'Make Active'}
                                            </button>
                                        </div></div>

                                </main></div></div></div>
                </div>


            </div>

            {/* ------------------------------------------------------------------------------------ */}


        </div>
    );
};
export default Navbars;