// import axios from 'axios';

// using axios
// 
// function createRequest() {
//     let token = localStorage.getItem('token')
//     const instance = axios.create({
//         baseURL: 'http://localhost:3000/',
//         timeout: 1000,
//         headers: {'Authorization': `Bearer ${token}`}
//     });
//     return instance
// }
// exemple to call the function using axios
//createRequest().get("/categories.json")


// using fetch

function createRequest(url) {
    let token = localStorage.getItem('token')
    const instance = fetch(`http://localhost:3000${url}`, {
        method: 'GET',
        headers: {  
          'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    return instance
}

function postRequest(url) {
  let token = localStorage.getItem('token')
  const instance = fetch(`http://localhost:3000${url}`, {
      method: 'PATCH',
      headers: {  
        'Authorization': `Bearer ${token}`
      }
  })
  .then(response => response.json())
  return instance
}

export default createRequest;

// exemple to call the function using fetch
//createRequest("/categories.json")

