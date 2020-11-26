
const cases =require('../models/case')
const states = require('../utils/arrays')

module.exports = {
async case(req, res){
      
        const Cases= await cases.create({
          death:req.body.death,
          state:req.body.state,
          date:req.body.date,
          name:req.body.name,
          
        })
        res.json(Cases)
         
      },async getcase(req, res){
        let confirmedCases = [];
        for (var x = 0; x < states.length; x++) {
          const Cases= await cases.countDocuments({state:states[x].key})
          const death = await cases.countDocuments({state:states[x].key,death:true})
          
          const stateCase = {
            state:states[x].value,
            cases: Cases,
            death:death,

          }
          confirmedCases[x] = stateCase;
        }
          res.json(confirmedCases)
          
        }
  }

