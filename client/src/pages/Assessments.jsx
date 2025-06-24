import React, { useState } from 'react';
import { Play, Clock, Star, Users, Award, ChevronRight, Filter } from 'lucide-react';

const Assessments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' }
  ];

  const assessments = [
    {
      id: 1,
      title: 'React Developer Assessment',
      category: 'frontend',
      difficulty: 'intermediate',
      duration: 45,
      questions: 25,
      participants: 1234,
      rating: 4.8,
      description: 'Test your React.js knowledge including hooks, state management, and component lifecycle.',
      skills: ['React', 'JavaScript', 'JSX', 'Hooks'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Node.js Backend Assessment',
      category: 'backend',
      difficulty: 'advanced',
      duration: 60,
      questions: 30,
      participants: 892,
      rating: 4.7,
      description: 'Comprehensive assessment covering Node.js, Express, databases, and API development.',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      category: 'frontend',
      difficulty: 'beginner',
      duration: 30,
      questions: 20,
      participants: 2156,
      rating: 4.9,
      description: 'Master the basics of JavaScript including ES6+ features, promises, and async/await.',
      skills: ['JavaScript', 'ES6+', 'Promises', 'DOM'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      category: 'fullstack',
      difficulty: 'advanced',
      duration: 90,
      questions: 40,
      participants: 756,
      rating: 4.6,
      description: 'Complete assessment covering both frontend and backend technologies.',
      skills: ['React', 'Node.js', 'Database', 'DevOps'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Python Data Science',
      category: 'data-science',
      difficulty: 'intermediate',
      duration: 75,
      questions: 35,
      participants: 943,
      rating: 4.8,
      description: 'Evaluate your data science skills with Python, pandas, numpy, and machine learning.',
      skills: ['Python', 'Pandas', 'NumPy', 'ML'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'React Native Mobile',
      category: 'mobile',
      difficulty: 'intermediate',
      duration: 50,
      questions: 28,
      participants: 623,
      rating: 4.5,
      description: 'Test your mobile app development skills with React Native.',
      skills: ['React Native', 'Mobile', 'JavaScript', 'Native APIs'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const filteredAssessments = assessments.filter(assessment => {
    const categoryMatch = selectedCategory === 'all' || assessment.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || assessment.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessments</h1>
          <p className="text-gray-600">
            Test your skills with our comprehensive role-based assessments and get detailed feedback.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Filter Assessments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Assessment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssessments.map((assessment) => (
            <div
              key={assessment.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${assessment.color} p-6 flex items-center justify-between relative overflow-hidden`}>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{assessment.title}</h3>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{assessment.duration}min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{assessment.questions}Q</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(assessment.difficulty)}`}>
                    {assessment.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{assessment.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {assessment.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{assessment.participants.toLocaleString()} taken</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{assessment.rating}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Start Assessment</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAssessments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No assessments found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to find more assessments that match your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessments;