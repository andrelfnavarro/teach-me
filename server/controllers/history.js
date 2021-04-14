const mongoose = require('mongoose');
const HistorySchema = require('../models/History');


function getMatchClauseEmails(emails) {
    if(emails.length != undefined && emails.length > 0) {
        return {
            'email': { $in: emails}
        }
    }
    else {
        return 
    }
}

module.exports = {
    findBuyHistoryByEmail: async (req, res, next) => {
        console.log('HistoryController.findBuyHistoryByEmail() called!');
        let History = mongoose.model('buy_histories', HistorySchema)

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

        History.find(finalFind, function(err, result) {
            res.json(result); 
        });
    },	

    createBuy: async (req, res, next) => {
        console.log('HistoryController.createBuy() called!');

        const { email, courseInfo } = req.body;
        console.log('email', email);
        console.log('courseInfo', courseInfo);
        
        let History = mongoose.model('buy_histories', HistorySchema)

        const currentDate = new Date(Date.now()).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

        const history = new History(
            { 
                email: email,
                date: currentDate,
                courseInfo: courseInfo,
            }
        )

        history.save(function(err, doc) {
            res.json({doc}); 
        });
    },
}