const mongoose = require('mongoose');
const CoursesSchema = require('../models/Courses');

module.exports = {

    // findCourses: async (req, res, next) => {
    //     console.log('CoursesController.findCourses() called!');
    //     console.log('req query', req.query)
    //     let Course = mongoose.model('course', CoursesSchema)

    //     let crewIds = []
    //     for(crewId in req.query.crewIds) { 
    //         crewIds.push(Number(req.query.crewIds[crewId]))
    //     }

    //     let userIds = []
    //     for(userId in req.query.userIds) { 
    //         userIds.push(Number(req.query.userIds[userId]))
    //     }

    //     Course.aggregate([
    //         {$match: 
    //             {
    //                 'crewId': {  $in: crewIds },
    //                 'userId': {  $in: userIds },
    //             }
    //         },
    //         {
    //             $group: {
    //                 '_id': { 'userId': '$userId' }, 
    //                 'crewId': { $first: '$crewId' },
    //                 'userId': { $first: '$userId' },
    //                 'name': { $first: '$name' },
    //                 'image': { $first: '$image' },
    //             }
    //         }
    //     ], function(err, result) {
    //         console.log(result[0])
    //         res.json({result});
    //         return result;
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