import express from 'express';
import { protect } from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// @route   GET /api/skills
// @desc    Get user skills
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('skills');
    res.json(user.skills);
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/skills
// @desc    Add skill to user
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { name, level, category } = req.body;
    
    const user = await User.findById(req.user._id);
    
    // Check if skill already exists
    const skillExists = user.skills.find(skill => skill.name.toLowerCase() === name.toLowerCase());
    if (skillExists) {
      return res.status(400).json({ message: 'Skill already exists' });
    }

    user.skills.push({ name, level, category });
    await user.save();

    res.json(user.skills);
  } catch (error) {
    console.error('Add skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/skills/:skillId
// @desc    Update skill
// @access  Private
router.put('/:skillId', protect, async (req, res) => {
  try {
    const { level, category } = req.body;
    
    const user = await User.findById(req.user._id);
    const skillIndex = user.skills.findIndex(skill => skill._id.toString() === req.params.skillId);
    
    if (skillIndex === -1) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    user.skills[skillIndex].level = level || user.skills[skillIndex].level;
    user.skills[skillIndex].category = category || user.skills[skillIndex].category;
    
    await user.save();
    res.json(user.skills);
  } catch (error) {
    console.error('Update skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/skills/:skillId
// @desc    Delete skill
// @access  Private
router.delete('/:skillId', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.skills = user.skills.filter(skill => skill._id.toString() !== req.params.skillId);
    
    await user.save();
    res.json(user.skills);
  } catch (error) {
    console.error('Delete skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/skills/analysis
// @desc    Get skill analysis
// @access  Private
router.get('/analysis', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('skills');
    
    const analysis = {
      totalSkills: user.skills.length,
      byLevel: {
        beginner: user.skills.filter(skill => skill.level === 'beginner').length,
        intermediate: user.skills.filter(skill => skill.level === 'intermediate').length,
        advanced: user.skills.filter(skill => skill.level === 'advanced').length,
        expert: user.skills.filter(skill => skill.level === 'expert').length
      },
      byCategory: {}
    };

    // Group by category
    user.skills.forEach(skill => {
      if (!analysis.byCategory[skill.category]) {
        analysis.byCategory[skill.category] = 0;
      }
      analysis.byCategory[skill.category]++;
    });

    res.json(analysis);
  } catch (error) {
    console.error('Skill analysis error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 