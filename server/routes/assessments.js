import express from 'express';
import { protect, authorize } from '../middleware/auth.js';
import Assessment from '../models/Assessment.js';

const router = express.Router();

// @route   GET /api/assessments
// @desc    Get all assessments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, difficulty, page = 1, limit = 10 } = req.query;
    
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;

    const assessments = await Assessment.find(filter)
      .populate('createdBy', 'firstName lastName')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Assessment.countDocuments(filter);

    res.json({
      assessments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get assessments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/assessments/:id
// @desc    Get assessment by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id)
      .populate('createdBy', 'firstName lastName');
    
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json(assessment);
  } catch (error) {
    console.error('Get assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/assessments
// @desc    Create new assessment
// @access  Private/Admin
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const assessment = new Assessment({
      ...req.body,
      createdBy: req.user._id
    });

    const savedAssessment = await assessment.save();
    res.status(201).json(savedAssessment);
  } catch (error) {
    console.error('Create assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/assessments/:id
// @desc    Update assessment
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const assessment = await Assessment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json(assessment);
  } catch (error) {
    console.error('Update assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/assessments/:id
// @desc    Delete assessment
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);
    
    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    await assessment.deleteOne();
    res.json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    console.error('Delete assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 