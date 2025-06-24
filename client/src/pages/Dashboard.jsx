import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  TrendingUp, 
  FileText, 
  BookOpen, 
  Clock, 
  CheckCircle,
  Award,
  ArrowRight,
  Play,
  Calendar
} from 'lucide-react';

const Dashboard = ({ user }) => {
  const quickActions = [
    {
      title: 'Take Assessment',
      description: 'Start a new role-based assessment',
      icon: Target,
      link: '/assessments',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'View Skills',
      description: 'Analyze your skill gaps',
      icon: TrendingUp,
      link: '/skills',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Build Resume',
      description: 'Create ATS-friendly resume',
      icon: FileText,
      link: '/resume',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Find Courses',
      description: 'Discover free learning resources',
      icon: BookOpen,
      link: '/courses',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const recentActivity = [
    {
      type: 'assessment',
      title: 'JavaScript Fundamentals Assessment',
      score: 85,
      date: '2 days ago',
      status: 'completed'
    },
    {
      type: 'course',
      title: 'React Best Practices Course',
      progress: 60,
      date: '1 week ago',
      status: 'in-progress'
    },
    {
      type: 'resume',
      title: 'Resume Updated',
      date: '3 days ago',
      status: 'updated'
    }
  ];

  const upcomingTasks = [
    {
      title: 'Complete React Assessment',
      priority: 'high',
      dueDate: 'Today'
    },
    {
      title: 'Update Portfolio Projects',
      priority: 'medium',
      dueDate: 'Tomorrow'
    },
    {
      title: 'Apply to 5 Jobs',
      priority: 'high',
      dueDate: 'This Week'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || 'User'}! 👋
          </h1>
          <p className="text-gray-600">
            Ready to continue your journey to career success? Let's make today productive.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-gray-600 text-sm">Assessments Taken</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-xl">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">78%</p>
                <p className="text-gray-600 text-sm">Average Score</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">5</p>
                <p className="text-gray-600 text-sm">Skills Improved</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-gray-600 text-sm">Learning Time</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.link}
                    className={`${action.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      {activity.type === 'assessment' && (
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                      {activity.type === 'course' && (
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-orange-600" />
                        </div>
                      )}
                      {activity.type === 'resume' && (
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <FileText className="w-5 h-5 text-emerald-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-gray-500 text-sm">{activity.date}</p>
                    </div>
                    {activity.score && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {activity.score}%
                        </span>
                      </div>
                    )}
                    {activity.progress && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {activity.progress}% Complete
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Progress Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Progress</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Completion</span>
                    <span className="text-sm text-gray-500">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Technical Skills</span>
                    <span className="text-sm text-gray-500">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Soft Skills</span>
                    <span className="text-sm text-gray-500">74%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500" style={{ width: '74%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Tasks</h2>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' : 
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                      <p className="text-xs text-gray-500">{task.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motivation Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h2 className="text-lg font-semibold mb-2">Keep Going! 🚀</h2>
              <p className="text-blue-100 text-sm mb-4">
                You're doing great! Complete 2 more assessments to reach your weekly goal.
              </p>
              <Link
                to="/assessments"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                <Play className="w-4 h-4" />
                <span>Start Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;