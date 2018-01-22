import actions from './actions'

const initState = {
  example_data: {}
}

export default function exampleReducer (state = initState,
                                     action) {
  switch (action.type) {
    case actions.getCall_SUCCESS:
      return {
        ...state,
        example_data: action.data
      }
    default:
      return state
  }
}
