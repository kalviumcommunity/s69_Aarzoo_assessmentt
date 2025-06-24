import axios from 'axios';

const API_BASE_URL = 'http://localhost:5002/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
};

// Users API
export const usersAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  update: (id, userData) => api.put(`/users/${id}`, userData),
  delete: (id) => api.delete(`/users/${id}`),
};

// Assessments API
export const assessmentsAPI = {
  getAll: (params) => api.get('/assessments', { params }),
  getById: (id) => api.get(`/assessments/${id}`),
  create: (assessmentData) => api.post('/assessments', assessmentData),
  update: (id, assessmentData) => api.put(`/assessments/${id}`, assessmentData),
  delete: (id) => api.delete(`/assessments/${id}`),
};

// Courses API
export const coursesAPI = {
  getAll: (params) => api.get('/courses', { params }),
  getById: (id) => api.get(`/courses/${id}`),
  create: (courseData) => api.post('/courses', courseData),
  update: (id, courseData) => api.put(`/courses/${id}`, courseData),
  delete: (id) => api.delete(`/courses/${id}`),
  enroll: (id) => api.post(`/courses/${id}/enroll`),
};

// Skills API
export const skillsAPI = {
  getAll: () => api.get('/skills'),
  add: (skillData) => api.post('/skills', skillData),
  update: (skillId, skillData) => api.put(`/skills/${skillId}`, skillData),
  delete: (skillId) => api.delete(`/skills/${skillId}`),
  getAnalysis: () => api.get('/skills/analysis'),
};

// Resume API
export const resumeAPI = {
  get: () => api.get('/resume'),
  update: (resumeData) => api.put('/resume', resumeData),
  addEducation: (educationData) => api.post('/resume/education', educationData),
  updateEducation: (id, educationData) => api.put(`/resume/education/${id}`, educationData),
  deleteEducation: (id) => api.delete(`/resume/education/${id}`),
  addExperience: (experienceData) => api.post('/resume/experience', experienceData),
  updateExperience: (id, experienceData) => api.put(`/resume/experience/${id}`, experienceData),
  deleteExperience: (id) => api.delete(`/resume/experience/${id}`),
  addProject: (projectData) => api.post('/resume/projects', projectData),
  updateProject: (id, projectData) => api.put(`/resume/projects/${id}`, projectData),
  deleteProject: (id) => api.delete(`/resume/projects/${id}`),
};

export default api; 