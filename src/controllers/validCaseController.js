const api = require('../service/api')
const states = require('../utils/arrays')

module.exports = {
    async faindCases(req, res) {
      const result = new Array;
      for (var x = 0; x < states.length; x++) {
        try {
          const response = await api.get('caso/data/', {
            params: {
              state: states[x].key,
              place_type: 'state',
            },
          });
  
          var state = response.data.results.slice(0, 14);
          state = state.reverse();
  
          const confirmedCases = [];
          const deaths = [];
          const dates = [];
  
          state.map((indicators, index) => {
            confirmedCases.push(indicators.confirmed);
            deaths.push(indicators.deaths);
            dates.push(indicators.date);
          });
  
          const lastPosition = state.length - 1;
  
          const stateObject = {
            state: state[0].state,
            confirmedCases: confirmedCases,
            deaths: deaths,
            dates: dates,
            currentDate: state[lastPosition].date,
            currentConfirmedCases: state[lastPosition].confirmed,
            currentDeaths: state[lastPosition].deaths,
          };
  
          result[x] = stateObject;
  
        } catch (err) {
          x--
        }
      }
  
      res.json(result)
  
    },
    async  loadCasesCities(req, res) {
      const result = new Array;
      for (var x = 0; x < states.length; x++) {
        try {
          const response = await api.get('caso/data/', {
            params: {
              is_last: 'True',
              state: states[x].key,
            },
          });
  
  
          const stateObject = {
            state: response.data.results[x].state,
            cities: response.data.results,
          }
          result[x] = stateObject
  
  
        } catch (err) {
          
        }
  
      }
      res.json(result)
  
    }
}