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

module.exports = {

    // findCoursesByTitle: async (req, res, next) => {
    //     console.log('CoursesController.findCourses() called!');
    //     console.log('req query', req.query)
    //     let Course = mongoose.model('course', CoursesSchema)

        // let titles = []
        // if(req.query.titles != '{}') {
        //     for(index in req.query.titles) { 
        //         titles.push(req.query.titles[index])
        //     }    
        // }
        
        // const matchClause = getMatchClause(titles)

    //     Course.aggregate([
    //         {$match: matchClause },
    //         {
    //             $group: {
    //                 '_id':  '$_id' , 
    //                 'grade': { $first: '$grade' },
    //                 'price': { $first: '$price' },
    //                 'quote': { $first: '$quote' },
    //                 'title': { $first: '$title' },
    //                 'userInfo': { $first: '$userInfo' },
    //             }
    //         }
    //     ], function(err, result) {
    //         console.log(result[0])
    //         res.json(result);
    //     });
	// },

    findAllCourses: async (req, res, next) => {
        console.log('CoursesController.findAllCourses() called!');
        
        let Course = mongoose.model('courses', CoursesSchema)

        Course.find({}, function(err, result) {
            console.log(result[0])
            res.json(result); 
        });
    },	

    findCoursesByTitle: async (req, res, next) => {
        console.log('CoursesController.findAllCourses() called!');
        console.log('req query', req.query)
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
        console.log(finalFind)

        Course.find(finalFind, function(err, result) {
            console.log(result[0])
            res.json(result); 
        });
    },	
	
    // createCourses: async (req, res, next) => {
    //     console.log('CoursesController.createCourses() called!');

    //     const { crewId, id, image, name, userId } = req.query;
        
    //     let Member = mongoose.model('course', CoursesSchema)

    //     const member = new Member(
    //         { 
    //             crewId: crewId,
    //             id: id,
    //             image: image,
    //             name: name,
    //             userId: userId
    //         }
    //     )

    //     member.save(function(err, doc) {
    //         res.json({doc}); 
    //     });
    // },
	
	deleteCourses: async (req, res, next) => {
        console.log('CoursesController.deleteCourses() called!');

        console.log('id', req.query.id)
        
        let Member = mongoose.model('course', CoursesSchema)

        Member.deleteOne( {"_id": req.query.id}, (function(err, doc) {
            if (err) {
                res.status(500).json({ err });
                return;
            }
            res.send({ msg: "successfully deleted" }); 
        }));
    },
    
}