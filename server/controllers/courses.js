const mongoose = require('mongoose');
const CoursesSchema = require('../models/Courses');

function getMatchClause(titles) {
    if(titles.length != undefined && titles.length > 0) {
        return {
            'title': { $in: titles}
        }
    }
    else {
        return 
    }
}

function getMatchClauseEmails(emails) {
    if(emails.length != undefined && emails.length > 0) {
        return {
            'userInfo.email': { $in: emails}
        }
    }
    else {
        return 
    }
}

module.exports = {

    findAllCourses: async (req, res, next) => {
        console.log('CoursesController.findAllCourses() called!');
        
        let Course = mongoose.model('courses', CoursesSchema)

        Course.find({}, function(err, result) {
            res.json(result); 
        });
    },	

    findCoursesByTitle: async (req, res, next) => {
        console.log('CoursesController.findAllCourses() called!');
        let Course = mongoose.model('courses', CoursesSchema)

        let titles = []
        if(req.query.titles != '{}') {
            for(index in req.query.titles) { 
                titles.push(req.query.titles[index])
            }    
        }
        
        const matchClause = getMatchClause(titles)
        let finalFind = {}
        if(matchClause != undefined) {
            finalFind = matchClause
        }

        Course.find(finalFind, function(err, result) {
            res.json(result); 
        });
    },	
    
    findCoursesByEmail: async (req, res, next) => {
        console.log('CoursesController.findAllCourses() called!');
        let Course = mongoose.model('courses', CoursesSchema)

        let emails = []
        if(req.query.emails != '{}') {
            for(index in req.query.emails) { 
                emails.push(req.query.emails[index])
            }    
        }
        
        const matchClause = getMatchClauseEmails(emails)
        let finalFind = {}
        if(matchClause != undefined) {
            finalFind = matchClause
        }

        Course.find(finalFind, function(err, result) {
            res.json(result); 
        });
    },	
	
    createCourse: async (req, res, next) => {
        console.log('CoursesController.createCourse() called!');

        const { title, quote, price, userInfo } = req.body;
        
        let Course = mongoose.model('courses', CoursesSchema)

        const course = new Course(
            { 
                title: title,
                quote: quote,
                price: price,
                grade: ((Math.random() * 1.5) + 3.2).toFixed(1),
                userInfo: userInfo
            }
        )

        course.save(function(err, doc) {
            res.json({doc}); 
        });
    },
	
	deleteCourse: async (req, res, next) => {
        console.log('CoursesController.deleteCourse() called!');
        
        let Member = mongoose.model('courses', CoursesSchema)

        Member.deleteOne( {"_id": req.query.id}, (function(err, doc) {
            if (err) {
                res.status(500).json({ err });
                return;
            }
            res.send({ msg: "successfully deleted" }); 
        }));
    },
    
}