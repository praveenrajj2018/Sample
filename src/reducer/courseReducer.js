// // // reducers/courseReducer.js
// // import CourseCreationForm from "../components/Content_Page";
// // const initialState = {
// //   showSideNav: false,
// //   activePage: 'home',
// //   courseDetail: {},
// //   topics: [],
// //   modalIsOpen: false,
// //   course: {
// //       title: '',
// //       category: '',
// //       level: '',
// //       duration: '',
// //       description: '',
// //       thumbnail: null,
// //       courseTopic: '',
// //       contentCovered: '',
// //   },
// //   topics: []
// // };

// // const courseReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case 'SET_COURSE_DETAIL':
// //       return {
// //         ...state,
// //         courseDetail: action.payload
// //       };
// //     case 'ADD_TOPIC':
// //       return {
// //         ...state,
// //         topics: [...state.topics, action.payload]
// //       };
// //     case 'TOGGLE_MODAL':
// //       return {
// //         ...state,
// //         modalIsOpen: action.payload
// //       };
// //       case 'SET_ACTIVE_PAGE':
// //           return {
// //               ...state,
// //               activePage: action.payload
// //           };
// //       case 'TOGGLE_SIDENAV':
// //           return {
// //               ...state,
// //               showSideNav: !state.showSideNav
// //           };
// //       case 'SET_COURSE_DETAIL':
// //           return {
// //               ...state,
// //               course: {...state.course, [action.payload.name]: action.payload.value}
// //           };
// //       case 'ADD_TOPIC':
// //           return {
// //               ...state,
// //               topics: [...state.topics, action.payload]
// //           };
          
// //       case 'TOGGLE_DETAILS':
// //           return {
// //               ...state,
// //               topics: state.topics.map((topic, index) => {
// //                   if (index === action.payload) {
// //                       return {...topic, isExpanded: !topic.isExpanded};
// //                   }
// //                   return topic;
// //               })
// //           };
          
// //       default:
// //           return state;
// //   }
// // };

// // export default courseReducer;
// // Import necessary libraries
// import CourseCreationForm from "../components/Content_Page";

// // Define initial state
// const initialState = {
//   showSideNav: false,
//   activePage: 'home',
//   courseDetail: {},
//   topics: [],
//   modalIsOpen: false,
//   modalIsOpens: false,
//   course: {
//     title: '',
//     category: '',
//     level: '',
//     duration: '',
//     description: '',
//     thumbnail: null,
//     courseTopic: '',
//     contentCovered: '',
//   },
//   topics: []
// };

// // Define reducer
// const courseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_COURSE_DETAIL':
//       return {
//         ...state,
//         courseDetail: action.payload
//       };
//     case 'ADD_TOPIC':
//       return {
//         ...state,
//         topics: [...state.topics, action.payload]
//       };
//     case 'TOGGLE_MODAL':
//       return {
//         ...state,
//         modalIsOpen: action.payload
//       };
//     case 'SET_ACTIVE_PAGE':
//       return {
//         ...state,
//         activePage: action.payload
//       };
//     case 'TOGGLE_SIDENAV':
//       return {
//         ...state,
//         showSideNav: !state.showSideNav
//       };
//     case 'SET_COURSE_DETAIL':
//       return {
//         ...state,
//         course: {...state.course, [action.payload.name]: action.payload.value}
//       };
//     case 'ADD_TOPIC':
//       return {
//         ...state,
//         topics: [...state.topics, action.payload]
//       };
//     case 'TOGGLE_DETAILS':
//       return {
//         ...state,
//         topics: state.topics.map((topic, index) => {
//           if (index === action.payload) {
//             return {...topic, isExpanded: !topic.isExpanded};
//           }
//           return topic;
//         })
//       };
//     case 'OPEN_MODAL':
//       return { ...state, modalIsOpen: true };
//     case 'CLOSE_MODAL':
//       return { ...state, modalIsOpen: false };
//     default:
//       return state;
//   }
// };

// export default courseReducer;
// Define initial state
const initialState = {
  showSideNav: false,
  activePage: 'home',
  courseDetail: {},
  topics: [],
  modalIsOpen: false,
  modalIsOpens: false,
  showReportDropdown: false,
  showModal: false,
  showPopup: false,
  isActive: true,
  course: {
    title: '',
    category: '',
    level: '',
    duration: '',
    description: '',
    thumbnail: null,
    courseTopic: '',
    contentCovered: '',
  }
};

// Define combined reducer
const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSE_DETAIL':
      return {
        ...state,
        courseDetail: action.payload
      };
    case 'ADD_TOPIC':
      return {
        ...state,
        topics: [...state.topics, action.payload]
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };
    case 'SET_ACTIVE_PAGE':
      return {
        ...state,
        activePage: action.payload
      };
    case 'TOGGLE_SIDENAV':
      return {
        ...state,
        showSideNav: !state.showSideNav
      };
    case 'SET_COURSE_DETAIL':
      return {
        ...state,
        course: {...state.course, [action.payload.name]: action.payload.value}
      };
    case 'ADD_TOPIC':
      return {
        ...state,
        topics: [...state.topics, action.payload]
      };
    case 'TOGGLE_DETAILS':
      return {
        ...state,
        topics: state.topics.map((topic, index) => {
          if (index === action.payload) {
            return {...topic, isExpanded: !topic.isExpanded};
          }
          return topic;
        })
      };
    case 'TOGGLE_REPORT_DROPDOWN':
      return {
        ...state,
        showReportDropdown: !state.showReportDropdown
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal
      };
    case 'TOGGLE_POPUP':
      return {
        ...state,
        showPopup: !state.showPopup
      };
    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        isActive: !state.isActive
      };case 'SET_IS_ACTIVE':
      return {
          ...state,
          isActive: action.payload
      }; case 'SET_SHOW_REPORT_DROPDOWN':
      return {
          ...state,
          showReportDropdown: action.payload
      };
    default:
      return state;
  }
};

export default combinedReducer;
