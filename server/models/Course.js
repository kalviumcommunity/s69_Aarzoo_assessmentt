import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required']
  },
  category: {
    type: String,
    required: [true, 'Course category is required'],
    enum: ['programming', 'design', 'marketing', 'business', 'data-science', 'other']
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  duration: {
    type: Number, // in hours
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  instructor: {
    name: String,
    bio: String,
    avatar: String
  },
  modules: [{
    title: String,
    description: String,
    duration: Number, // in minutes
    content: String,
    videoUrl: String,
    resources: [{
      title: String,
      url: String,
      type: String
    }]
  }],
  requirements: [String],
  learningOutcomes: [String],
  thumbnail: String,
  isPublished: {
    type: Boolean,
    default: false
  },
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  rating: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

export default Course; 