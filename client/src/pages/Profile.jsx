import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Calendar, Edit, Save, Camera, Award, Target, TrendingUp } from 'lucide-react';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    role: user?.role || 'Software Developer',
    bio: 'Passionate software developer with 5+ years of experience in full-stack development. Love creating innovative solutions and learning new technologies.',
    experience: '5+ years',
    joinDate: 'January 2024',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
    goals: ['Master React Native', 'Learn Machine Learning', 'Improve System Design Skills']
  });

  const achievements = [
    {
      title: 'Assessment Master',
      description: 'Completed 10+ assessments',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      earned: true
    },
    {
      title: 'Skill Improver',
      description: 'Improved 5 skills this month',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      earned: true
    },
    {
      title: 'Course Completionist',
      description: 'Finished 3 courses',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      earned: false
    },
    {
      title: 'Resume Builder',
      description: 'Created first resume',
      icon: User,
      color: 'from-orange-500 to-orange-600',
      earned: true
    }
  ];

  const recentActivity = [
    {
      type: 'assessment',
      title: 'Completed React Assessment',
      date: '2 days ago',
      score: 85
    },
    {
      type: 'course',
      title: 'Started Node.js Course',
      date: '1 week ago',
      progress: 60
    },
    {
      type: 'resume',
      title: 'Updated Resume',
      date: '3 days ago'
    },
    {
      type: 'skill',
      title: 'Improved JavaScript Skills',
      date: '1 week ago',
      improvement: '+12%'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white relative">
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-200"
                  >
                    {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white text-blue-600 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                      <Camera className="w-3 h-3" />
                    </button>
                  </div>
                  
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-xl font-bold bg-transparent border-b border-white border-opacity-50 text-center text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100"
                    />
                  ) : (
                    <h1 className="text-xl font-bold mb-2">{profileData.name}</h1>
                  )}
                  
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="bg-transparent border-b border-white border-opacity-50 text-center text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100"
                    />
                  ) : (
                    <p className="text-blue-100">{profileData.role}</p>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{profileData.email}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{profileData.phone}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <span className="text-gray-600">{profileData.location}</span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{profileData.experience} experience</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Joined {profileData.joinDate}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="px-6 pb-6">
                <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {isEditing && (
                  <button className="border-2 border-dashed border-gray-300 text-gray-500 px-4 py-2 rounded-full hover:border-blue-400 hover:text-blue-500 transition-colors duration-200">
                    + Add Skill
                  </button>
                )}
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Learning Goals</h2>
              <div className="space-y-3">
                {profileData.goals.map((goal, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
                {isEditing && (
                  <button className="w-full border-2 border-dashed border-gray-300 text-gray-500 p-3 rounded-lg hover:border-blue-400 hover:text-blue-500 transition-colors duration-200">
                    + Add Goal
                  </button>
                )}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      achievement.earned
                        ? 'border-transparent bg-gradient-to-r from-gray-50 to-blue-50'
                        : 'border-dashed border-gray-300 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        achievement.earned
                          ? `bg-gradient-to-r ${achievement.color}`
                          : 'bg-gray-300'
                      }`}>
                        <achievement.icon className={`w-5 h-5 ${
                          achievement.earned ? 'text-white' : 'text-gray-500'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0">
                      {activity.type === 'assessment' && (
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                      {activity.type === 'course' && (
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-orange-600" />
                        </div>
                      )}
                      {activity.type === 'resume' && (
                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-emerald-600" />
                        </div>
                      )}
                      {activity.type === 'skill' && (
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-purple-600" />
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
                    {activity.improvement && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {activity.improvement}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;