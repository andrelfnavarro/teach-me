var express = require('express');
var router = express.Router();

const CoursesController = require('../controllers/courses');

/**
 * @route   GET /api/members/
 * @desc    Get all members
 * @access
 */

// router.route('/')
//     .get(CoursesController.findCourses);

// router.route('/')
//     .post(CoursesController.createCourses);

router.route('/')
    .delete(CoursesController.deleteCourses);

router.route('/all')
    .get(CoursesController.findAllCourses);

module.exports = router;