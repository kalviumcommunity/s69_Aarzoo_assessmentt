import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Assessment title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Assessment description is required']
  },
  category: {
    type: String,
    required: [true, 'Assessment category is required'],
    enum: ['programming', 'design', 'marketing', 'business', 'other']
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    correctAnswer: {
      type: Number,
      required: true
    },
    explanation: String
  }],
  timeLimit: {
    type: Number, // in minutes
    default: 30
  },
  passingScore: {
    type: Number,
    default: 70
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

export default Assessment; 