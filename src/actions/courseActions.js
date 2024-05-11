// actions/courseActions.js

import axios from 'axios';
import { ADD_TOPIC } from './actionTypes';
import Navbars from '../components/Course_Description';
import CourseCreationForm from '../components/Content_Page';
export const addTopic = (topic) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/topics', topic);
  dispatch({
    type: ADD_TOPIC,
    payload: response.data
  });
};
// Define action types
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Define action types
const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const TOGGLE_REPORT_DROPDOWN = 'TOGGLE_REPORT_DROPDOWN';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_POPUP = 'TOGGLE_POPUP';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

// Define action creators
export const openModal = () => ({
  type: OPEN_MODAL
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});
// actions/index.js
//import Navbars from "../components/Course_Description";
export const setActivePage = (page) => ({
    type: 'SET_ACTIVE_PAGE',
    payload: page
});

export const toggleSideNav = () => ({
    type: 'TOGGLE_SIDENAV'
});

export const setCourseDetail = (name, value) => ({
    type: 'SET_COURSE_DETAIL',
    payload: { name, value }
});

// export const addTopic = (topic) => ({
//     type: 'ADD_TOPIC',
//     payload: topic
// });

export const toggleDetails = (index) => ({
    type: 'TOGGLE_DETAILS',
    payload: index
});
export const SET_ERROR = 'SET_ERROR';
// Define action creators
// export const toggleSideNav = () => ({
//     type: TOGGLE_SIDENAV
//   });
  
  // export const setActivePage = (page) => ({
  //   type: SET_ACTIVE_PAGE,
  //   payload: page
  // });
  
  export const toggleReportDropdown = () => ({
    type: TOGGLE_REPORT_DROPDOWN
  });
  
  export const toggleModal = () => ({
    type: TOGGLE_MODAL
  });
  
  export const togglePopup = () => ({
    type: TOGGLE_POPUP
  });
  
  export const toggleActive = () => ({
    type: TOGGLE_ACTIVE
  });
  
// actions.js
// export const toggleSideNav = () => ({
//   type: 'TOGGLE_SIDENAV'
// });

// export const setActivePage = (page) => ({
//   type: 'SET_ACTIVE_PAGE',
//   payload: page
// });

export const setShowReportDropdown = (show) => ({
  type: 'SET_SHOW_REPORT_DROPDOWN',
  payload: show
});

export const setShowModal = (show) => ({
  type: 'SET_SHOW_MODAL',
  payload: show
});

export const setIsActive = (isActive) => ({
  type: 'SET_IS_ACTIVE',
  payload: isActive
});
// actions.js
// export const togglePopup = () => ({
//   type: 'TOGGLE_POPUP'
// });
