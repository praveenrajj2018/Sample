import logo from './logo.svg';
import './App.css';
import CourseCreationForm from './components/Content_Page';
import Navbars from './components/Course_Description';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import store  from './store/index';
//import Navbars from './components/Course_Description';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      {/* <div><Navbars/>
        <CourseCreationForm />
        
      </div> */}
       <Router>
      <Routes>
      <Route path="/" element={ <Navbars/>} />
        <Route path="/content-creation" element={<CourseCreationForm />} />
        {/* other routes */}
      </Routes>
    </Router>
    </Provider>
    {/* <CourseCreationForm/> */}
  </div>
  );
}

export default App;
