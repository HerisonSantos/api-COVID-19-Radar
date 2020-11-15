
const cases =require('../models/case')

module.exports = {
async case(req, res){
      
        const Cases= await cases.create({
          death:req.body.death,
          state:req.body.state,
          date:req.body.date,
        })
        res.json(Cases)
         
      },async getcase(req, res){
          const Cases= await cases.countDocuments({state:req.query.state})
          const death = await cases.countDocuments({state:req.query.state,death:true})
          res.json({
            state:req.query.state,
            cases: Cases,
            death:death,

          })
          
        }
  }

