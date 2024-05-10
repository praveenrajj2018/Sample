// actions/index.js
import Navbars from "../components/Course_Description";
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

export const addTopic = (topic) => ({
    type: 'ADD_TOPIC',
    payload: topic
});

export const toggleDetails = (index) => ({
    type: 'TOGGLE_DETAILS',
    payload: index
});
export const SET_ERROR = 'SET_ERROR';
// Define action creators
// export const toggleSideNav = () => ({
//     type: TOGGLE_SIDENAV
//   });
  
//   export const setActivePage = (page) => ({
//     type: SET_ACTIVE_PAGE,
//     payload: page
//   });
  
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
  