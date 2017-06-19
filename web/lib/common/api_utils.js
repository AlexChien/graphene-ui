export default class ApiUtils{
  /*
    a api responder middleware to check if api response status code should raises error
    @ref: https://medium.com/@yoniweisbrod/interacting-with-apis-using-react-native-fetch-9733f28566bb#.gzn8w9fuo
  */
  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let errMsg = "Error Occured";

      return response.json().then( json => {
        errMsg = json.error
      })
      .then(() => {
        let err = new Error(errMsg);
        err.response = response;

        throw err;
      })

    }
  }
}