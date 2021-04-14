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

router.route('/')
    .delete(CoursesController.deleteCourse);

router.route('/title')
    .get(CoursesController.findCoursesByTitle);

router.route('/email')
    .get(CoursesController.findCoursesByEmail);

router.route('/')
    .post(CoursesController.createCourse);

router.route('/all')
    .get(CoursesController.findAllCourses);

module.exports = router;