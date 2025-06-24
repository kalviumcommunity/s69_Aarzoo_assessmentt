import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, BookOpen, ExternalLink, Heart } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'soft-skills', name: 'Soft Skills' }
  ];

  const platforms = [
    { id: 'all', name: 'All Platforms' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'coursera', name: 'Coursera' },
    { id: 'edx', name: 'edX' },
    { id: 'freecodecamp', name: 'freeCodeCamp' },
    { id: 'udemy', name: 'Udemy' },
    { id: 'khan', name: 'Khan Academy' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'John Smith',
      platform: 'youtube',
      category: 'web-development',
      rating: 4.8,
      students: 125000,
      duration: '12 hours',
      level: 'Intermediate',
      description: 'Master React.js from basics to advanced concepts including hooks, context, and testing.',
      thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['React', 'JavaScript', 'JSX', 'Hooks'],
      url: 'https://youtube.com/course'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Sarah Johnson',
      platform: 'coursera',
      category: 'data-science',
      rating: 4.9,
      students: 85000,
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn Python programming with focus on data analysis, visualization, and machine learning.',
      thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      url: 'https://coursera.org/course'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      instructor: 'Mike Wilson',
      platform: 'freecodecamp',
      category: 'programming',
      rating: 4.7,
      students: 200000,
      duration: '6 hours',
      level: 'Beginner',
      description: 'Complete guide to JavaScript covering ES6+, async programming, and DOM manipulation.',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['JavaScript', 'ES6+', 'DOM', 'Async/Await'],
      url: 'https://freecodecamp.org/course'
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      instructor: 'David Brown',
      platform: 'udemy',
      category: 'web-development',
      rating: 4.6,
      students: 95000,
      duration: '15 hours',
      level: 'Advanced',
      description: 'Build scalable backend applications with Node.js, Express, and MongoDB.',
      thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      url: 'https://udemy.com/course'
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      instructor: 'Emily Davis',
      platform: 'edx',
      category: 'design',
      rating: 4.8,
      students: 65000,
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Learn design thinking, user research, prototyping, and modern design tools.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
      url: 'https://edx.org/course'
    },
    {
      id: 6,
      title: 'Communication Skills for Developers',
      instructor: 'Robert Lee',
      platform: 'khan',
      category: 'soft-skills',
      rating: 4.5,
      students: 45000,
      duration: '4 hours',
      level: 'Beginner',
      description: 'Improve your communication skills for better collaboration and career growth.',
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['Communication', 'Presentation', 'Team Collaboration', 'Leadership'],
      url: 'https://khanacademy.org/course'
    },
    {
      id: 7,
      title: 'React Native Mobile Development',
      instructor: 'Lisa Chen',
      platform: 'youtube',
      category: 'mobile',
      rating: 4.7,
      students: 78000,
      duration: '20 hours',
      level: 'Advanced',
      description: 'Build cross-platform mobile apps with React Native and modern development practices.',
      thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['React Native', 'Mobile Development', 'iOS', 'Android'],
      url: 'https://youtube.com/course'
    },
    {
      id: 8,
      title: 'Docker and DevOps Fundamentals',
      instructor: 'Alex Martinez',
      platform: 'coursera',
      category: 'devops',
      rating: 4.8,
      students: 92000,
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Master containerization, CI/CD pipelines, and cloud deployment strategies.',
      thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
      url: 'https://coursera.org/course'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'all' || course.platform === selectedPlatform;
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  const toggleFavorite = (courseId) => {
    setFavorites(prev => 
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform) => {
    // In a real app, you'd use actual platform icons
    return '🎓';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Free Courses</h1>
          <p className="text-gray-600">
            Discover high-quality free courses to improve your skills based on your assessment results.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses, instructors, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {platforms.map(platform => (
                  <option key={platform.id} value={platform.id}>
                    {platform.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <button
                  onClick={() => toggleFavorite(course.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(course.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {getPlatformIcon(course.platform)} {platforms.find(p => p.id === course.platform)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">by {course.instructor}</p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                        +{course.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{(course.students / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Start Course</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find more courses.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPlatform('all');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses
                .filter(course => favorites.includes(course.id))
                .map(course => (
                  <div key={course.id} className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{course.rating}</span>
                      </div>
                      <button
                        onClick={() => toggleFavorite(course.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;