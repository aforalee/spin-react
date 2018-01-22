class DiplomatApi {
	
	 static getConnectorsStatus() {
    return fetch('http://localhost:8085/Diplomat/management').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  

export default CatApi;  