import express from 'express';
import { protect } from '../middleware/auth.js';
import Resume from '../models/Resume.js';

const router = express.Router();

// @route   GET /api/resume
// @desc    Get user's resume
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    let resume = await Resume.findOne({ user: req.user._id });
    
    if (!resume) {
      // Create a new resume if none exists
      resume = new Resume({
        user: req.user._id,
        personalInfo: {
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          email: req.user.email
        }
      });
      await resume.save();
    }

    res.json(resume);
  } catch (error) {
    console.error('Get resume error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/resume
// @desc    Update resume
// @access  Private
router.put('/', protect, async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { user: req.user._id },
      req.body,
      { new: true, upsert: true, runValidators: true }
    );

    res.json(resume);
  } catch (error) {
    console.error('Update resume error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/resume/education
// @desc    Add education to resume
// @access  Private
router.post('/education', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.education.push(req.body);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Add education error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/resume/education/:id
// @desc    Update education entry
// @access  Private
router.put('/education/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    const educationIndex = resume.education.findIndex(edu => edu._id.toString() === req.params.id);
    if (educationIndex === -1) {
      return res.status(404).json({ message: 'Education entry not found' });
    }

    resume.education[educationIndex] = { ...resume.education[educationIndex], ...req.body };
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Update education error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/resume/education/:id
// @desc    Delete education entry
// @access  Private
router.delete('/education/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.education = resume.education.filter(edu => edu._id.toString() !== req.params.id);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Delete education error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/resume/experience
// @desc    Add experience to resume
// @access  Private
router.post('/experience', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.experience.push(req.body);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Add experience error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/resume/experience/:id
// @desc    Update experience entry
// @access  Private
router.put('/experience/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    const experienceIndex = resume.experience.findIndex(exp => exp._id.toString() === req.params.id);
    if (experienceIndex === -1) {
      return res.status(404).json({ message: 'Experience entry not found' });
    }

    resume.experience[experienceIndex] = { ...resume.experience[experienceIndex], ...req.body };
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Update experience error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/resume/experience/:id
// @desc    Delete experience entry
// @access  Private
router.delete('/experience/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.experience = resume.experience.filter(exp => exp._id.toString() !== req.params.id);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Delete experience error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/resume/projects
// @desc    Add project to resume
// @access  Private
router.post('/projects', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.projects.push(req.body);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Add project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/resume/projects/:id
// @desc    Update project entry
// @access  Private
router.put('/projects/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    const projectIndex = resume.projects.findIndex(proj => proj._id.toString() === req.params.id);
    if (projectIndex === -1) {
      return res.status(404).json({ message: 'Project entry not found' });
    }

    resume.projects[projectIndex] = { ...resume.projects[projectIndex], ...req.body };
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/resume/projects/:id
// @desc    Delete project entry
// @access  Private
router.delete('/projects/:id', protect, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user._id });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    resume.projects = resume.projects.filter(proj => proj._id.toString() !== req.params.id);
    await resume.save();

    res.json(resume);
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 