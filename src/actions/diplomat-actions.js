// src/actions/diplomat-Actions.js

import catApi from '../diplomat-api/diplomat';

export function loadConnecton() {  
  return function(dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}