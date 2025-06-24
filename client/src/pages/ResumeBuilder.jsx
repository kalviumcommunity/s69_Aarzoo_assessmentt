import React, { useState } from 'react';
import { FileText, Download, Eye, Edit, Save, Plus, X } from 'lucide-react';

const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [activeSection, setActiveSection] = useState('personal');
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      summary: 'Experienced Software Developer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies.'
    },
    experience: [
      {
        title: 'Senior Software Developer',
        company: 'Tech Solutions Inc.',
        location: 'New York, NY',
        duration: '2021 - Present',
        description: 'Led development of scalable web applications using React and Node.js, improving performance by 40%.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        location: 'New York, NY',
        year: '2019'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB',
        technologies: ['React', 'Node.js', 'MongoDB']
      }
    ]
  });

  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'Clean and modern design perfect for corporate roles',
      preview: 'bg-gradient-to-br from-blue-50 to-white',
      popular: true
    },
    {
      id: 2,
      name: 'Creative',
      description: 'Stand out with this creative design for design/marketing roles',
      preview: 'bg-gradient-to-br from-purple-50 to-pink-50',
      popular: false
    },
    {
      id: 3,
      name: 'Technical',
      description: 'Perfect for developers and technical positions',
      preview: 'bg-gradient-to-br from-gray-50 to-blue-50',
      popular: true
    },
    {
      id: 4,
      name: 'Minimal',
      description: 'Simple and elegant design that focuses on content',
      preview: 'bg-gradient-to-br from-green-50 to-white',
      popular: false
    }
  ];

  const sections = [
    { id: 'personal', name: 'Personal Info' },
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' }
  ];

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          title: '',
          company: '',
          location: '',
          duration: '',
          description: ''
        }
      ]
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          degree: '',
          school: '',
          location: '',
          year: ''
        }
      ]
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          name: '',
          description: '',
          technologies: []
        }
      ]
    });
  };

  const removeExperience = (index) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index)
    });
  };

  const removeEducation = (index) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index)
    });
  };

  const removeProject = (index) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index)
    });
  };

  const renderPersonalSection = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={resumeData.personal.fullName}
            onChange={(e) => setResumeData({
              ...resumeData,
              personal: { ...resumeData.personal, fullName: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={resumeData.personal.email}
            onChange={(e) => setResumeData({
              ...resumeData,
              personal: { ...resumeData.personal, email: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            value={resumeData.personal.phone}
            onChange={(e) => setResumeData({
              ...resumeData,
              personal: { ...resumeData.personal, phone: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            value={resumeData.personal.location}
            onChange={(e) => setResumeData({
              ...resumeData,
              personal: { ...resumeData.personal, location: e.target.value }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
        <textarea
          rows={4}
          value={resumeData.personal.summary}
          onChange={(e) => setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, summary: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Write a brief summary of your professional background and key achievements..."
        />
      </div>
    </div>
  );

  const renderExperienceSection = () => (
    <div className="space-y-6">
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
          <button
            onClick={() => removeExperience(index)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                value={exp.title}
                onChange={(e) => {
                  const updated = [...resumeData.experience];
                  updated[index].title = e.target.value;
                  setResumeData({ ...resumeData, experience: updated });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => {
                  const updated = [...resumeData.experience];
                  updated[index].company = e.target.value;
                  setResumeData({ ...resumeData, experience: updated });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => {
                  const updated = [...resumeData.experience];
                  updated[index].location = e.target.value;
                  setResumeData({ ...resumeData, experience: updated });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={exp.duration}
                onChange={(e) => {
                  const updated = [...resumeData.experience];
                  updated[index].duration = e.target.value;
                  setResumeData({ ...resumeData, experience: updated });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2021 - Present"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={3}
              value={exp.description}
              onChange={(e) => {
                const updated = [...resumeData.experience];
                updated[index].description = e.target.value;
                setResumeData({ ...resumeData, experience: updated });
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your key responsibilities and achievements..."
            />
          </div>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <Plus className="w-5 h-5" />
        <span>Add Experience</span>
      </button>
    </div>
  );

  const renderSkillsSection = () => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
          >
            <span>{skill}</span>
            <button
              onClick={() => {
                const updated = resumeData.skills.filter((_, i) => i !== index);
                setResumeData({ ...resumeData, skills: updated });
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add a skill"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const input = e.target;
              if (input.value.trim()) {
                setResumeData({
                  ...resumeData,
                  skills: [...resumeData.skills, input.value.trim()]
                });
                input.value = '';
              }
            }
          }}
        />
        <button
          onClick={(e) => {
            const input = e.target.previousElementSibling;
            if (input.value.trim()) {
              setResumeData({
                ...resumeData,
                skills: [...resumeData.skills, input.value.trim()]
              });
              input.value = '';
            }
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Builder</h1>
          <p className="text-gray-600">
            Create ATS-friendly resumes that help you land more interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Template</h2>
              <div className="space-y-3">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedTemplate === template.id
                        ? 'ring-2 ring-blue-500 bg-blue-50'
                        : 'hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`h-20 ${template.preview} rounded-lg mb-3 flex items-center justify-center`}>
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{template.name}</h3>
                        {template.popular && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{template.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <button className="w-full bg-white text-gray-700 py-2 px-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              {/* Section Tabs */}
              <div className="border-b border-gray-200 px-6 pt-6">
                <div className="flex space-x-1 overflow-x-auto">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {activeSection === 'personal' && renderPersonalSection()}
                {activeSection === 'experience' && renderExperienceSection()}
                {activeSection === 'skills' && renderSkillsSection()}
                {activeSection === 'education' && (
                  <div className="space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
                        <button
                          onClick={() => removeEducation(index)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                            <input
                              type="text"
                              value={edu.degree}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                            <input
                              type="text"
                              value={edu.school}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <input
                              type="text"
                              value={edu.location}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                            <input
                              type="text"
                              value={edu.year}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addEducation}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Education</span>
                    </button>
                  </div>
                )}
                {activeSection === 'projects' && (
                  <div className="space-y-6">
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 relative">
                        <button
                          onClick={() => removeProject(index)}
                          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                            <input
                              type="text"
                              value={project.name}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                              rows={3}
                              value={project.description}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addProject}
                      className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Add Project</span>
                    </button>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button className="text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Save Draft
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Resume Preview</h2>
              <div className="bg-gray-50 rounded-lg p-4 min-h-96">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{resumeData.personal.fullName}</h3>
                  <p className="text-sm text-gray-600">{resumeData.personal.email}</p>
                  <p className="text-sm text-gray-600">{resumeData.personal.phone}</p>
                  <p className="text-sm text-gray-600">{resumeData.personal.location}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Summary</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{resumeData.personal.summary}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.slice(0, 6).map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {resumeData.experience.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <div className="text-xs text-gray-600">
                      <p className="font-medium">{resumeData.experience[0].title}</p>
                      <p>{resumeData.experience[0].company}</p>
                      <p className="text-xs text-gray-500">{resumeData.experience[0].duration}</p>
                    </div>
                  </div>
                )}

                <div className="text-center mt-8">
                  <p className="text-xs text-gray-500">This is a simplified preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;