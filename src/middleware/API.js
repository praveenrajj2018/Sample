// middleware/api.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/CourseTopic', // replace with your API base URL
    headers: {
        'Content-Type': 'application/json'
    }
});

export const addCourseTopic = async (courseTopic) => {
    try {
        const response = await api.post('/lxp/course/topic', courseTopic);
        return response.data;
    } catch (error) {
        console.error('Failed to add course topic', error);
        throw error;
    }
};

export const getCourseTopicByCourseId = async (id) => {
    try {
        const response = await api.get(`/lxp/course/${id}/topic`);
        return response.data;
    } catch (error) {
        console.error(`Failed to get course topic with ID ${id}`, error);
        throw error;
    }
};

export const updateCourseTopic = async (updatedTopic) => {
    try {
        const response = await api.put('', updatedTopic);
        return response.data;
    } catch (error) {
        console.error('Failed to update course topic', error);
        throw error;
    }
};

export const deleteCourseTopic = async (id) => {
    try {
        const response = await api.delete(`/lxp/course/topic/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete course topic with ID ${id}`, error);
        throw error;
    }
};
