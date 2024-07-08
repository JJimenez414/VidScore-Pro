export default class Request {

    static postVideo(blob, filename) {

        fetch(blob)
        .then(response => response.blob())
        .then(blob => {
                    
            const form = new FormData();
            
            form.append("file", blob, filename);

            return fetch('http://127.0.0.1:8080/postVideo', {
                method: 'POST',
                body: form,
            })
            .then(response => response.json())
            .then(data => console.log(data.nameRequest))
            .catch(error => console.error(error));
        })
    }

    static sendData() { 
        return fetch('http://127.0.0.1:8080/sendData')
            .then(response => response.json())
            .then(data => {
                console.log(data.scaled_percentage);
                return data;
             }
            );
    }

}