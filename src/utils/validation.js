// utils/validation.js
import CourseCreationForm from "../components/Content_Page";
export const validateCourseTopic = (topics, course) => {
    if (topics.some(topic => topic.courseTopic === course.courseTopic)) {
        return '⚠️ Topic already exists in this course. Please try with another topic.';
    } else if (!course.courseTopic.trim() || !course.contentCovered.trim()) {
        return 'Please fill in all the fields.';
    } else {
        return '';
    }
};
