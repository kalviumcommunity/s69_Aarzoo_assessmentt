import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Target, BookOpen, CheckCircle, AlertTriangle, Star } from 'lucide-react';

const SkillAnalysis = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  const skillCategories = [
    {
      name: 'Technical Skills',
      skills: [
        { name: 'JavaScript', level: 85, trend: 'up', improvement: '+12%' },
        { name: 'React', level: 78, trend: 'up', improvement: '+8%' },
        { name: 'Node.js', level: 65, trend: 'down', improvement: '-3%' },
        { name: 'Python', level: 72, trend: 'up', improvement: '+15%' },
        { name: 'Database Design', level: 58, trend: 'stable', improvement: '0%' },
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 88, trend: 'up', improvement: '+5%' },
        { name: 'Leadership', level: 74, trend: 'up', improvement: '+10%' },
        { name: 'Problem Solving', level: 82, trend: 'up', improvement: '+7%' },
        { name: 'Time Management', level: 69, trend: 'down', improvement: '-2%' },
        { name: 'Teamwork', level: 91, trend: 'up', improvement: '+3%' },
      ]
    }
  ];

  const recommendations = [
    {
      type: 'critical',
      skill: 'Node.js',
      current: 65,
      target: 80,
      courses: [
        { title: 'Complete Node.js Developer Course', platform: 'Udemy', rating: 4.8, free: true },
        { title: 'Node.js API Development', platform: 'freeCodeCamp', rating: 4.7, free: true }
      ]
    },
    {
      type: 'improvement',
      skill: 'Database Design',
      current: 58,
      target: 75,
      courses: [
        { title: 'Database Design Fundamentals', platform: 'Coursera', rating: 4.6, free: true },
        { title: 'SQL and Database Design', platform: 'Khan Academy', rating: 4.5, free: true }
      ]
    },
    {
      type: 'enhancement',
      skill: 'Time Management',
      current: 69,
      target: 85,
      courses: [
        { title: 'Productivity Masterclass', platform: 'YouTube', rating: 4.4, free: true },
        { title: 'Effective Time Management', platform: 'edX', rating: 4.3, free: true }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return 'from-green-500 to-emerald-500';
    if (level >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-400"></div>;
    }
  };

  const getRecommendationType = (type) => {
    switch (type) {
      case 'critical':
        return {
          icon: AlertTriangle,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        };
      case 'improvement':
        return {
          icon: Target,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200'
        };
      default:
        return {
          icon: TrendingUp,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Skill Analysis</h1>
          <p className="text-gray-600">
            Track your progress and discover areas for improvement with personalized recommendations.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <p className="text-gray-600 text-sm">Overall Score</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+5% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">10</p>
                <p className="text-gray-600 text-sm">Skills Tracked</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-600">7 improving, 2 stable, 1 declining</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-gray-600 text-sm">Critical Areas</p>
              </div>
              <div className="bg-red-100 p-3 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-red-600">Needs immediate attention</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-gray-600 text-sm">Courses Recommended</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-xl">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-green-600">All free resources</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Assessment */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Skill Levels</h2>
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>

            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">{category.name}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-700">{skill.name}</span>
                            {getTrendIcon(skill.trend)}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">{skill.improvement}</span>
                            <span className="font-semibold text-gray-900">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Improvement Recommendations</h2>
            
            <div className="space-y-6">
              {recommendations.map((rec, index) => {
                const typeConfig = getRecommendationType(rec.type);
                const IconComponent = typeConfig.icon;
                
                return (
                  <div key={index} className={`${typeConfig.bgColor} ${typeConfig.borderColor} border rounded-xl p-4`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${typeConfig.bgColor}`}>
                        <IconComponent className={`w-5 h-5 ${typeConfig.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{rec.skill}</h3>
                          <span className="text-sm text-gray-500">
                            {rec.current}% → {rec.target}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div className="relative w-full h-full">
                            <div
                              className="bg-gray-400 h-2 rounded-full"
                              style={{ width: `${(rec.current / 100) * 100}%` }}
                            ></div>
                            <div
                              className={`absolute top-0 bg-gradient-to-r ${getSkillColor(rec.target)} h-2 rounded-full opacity-50`}
                              style={{ width: `${(rec.target / 100) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-700">Recommended Courses:</p>
                          {rec.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex items-center justify-between py-2 px-3 bg-white rounded-lg">
                              <div>
                                <p className="text-sm font-medium text-gray-800">{course.title}</p>
                                <p className="text-xs text-gray-500">{course.platform}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                  <span className="text-xs text-gray-600">{course.rating}</span>
                                </div>
                                {course.free && (
                                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                    Free
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Weekly Goal</h3>
                  <p className="text-sm text-gray-600">Complete 2 courses this week to improve your weakest skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysis;