export default class Request {

    static postVideo(body) {
       return fetch('http://127.0.0.1:8080/postVideo', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"data": body})
      })
      .then(response => response.json())
      .then(data => console.log(data.id))
      .catch(error => console.error(error));
    }

    static getVideo() { 
        return fetch('http://127.0.0.1:8080/getVideo')
            .then(response => response.json())
            .then(data => {
                return data;
             }
            );
    }

}