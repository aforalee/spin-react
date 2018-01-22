import axios from 'axios'

export const getApi = () => dispatch => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
  }).then(function (response) {
    dispatch(exampleActons.getCall)

    // dispatch(type, data)
    history.push('/dashboard')
  }).catch(err => {
    console.log(err)
  })
}

const exampleActons = {
  getCall_SUCCESS: 'getCall_SUCCESS',
  getCall: (data) => ({type: exampleActons.getCall_SUCCESS, data})
}
export default exampleActons
