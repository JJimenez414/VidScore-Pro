export default class Request {
    static postVideo(videoURL) {

        return fetch(videoURL)
        .then(response => {
            if (!response.ok) {
                console.log("Error to make URL to blob. ${response.statusText}");
            } 
            return response.blob();
        }) // turn the URL passed by the URL.createObjectURL to a file/blob
        .then(blob => {

            const form = new FormData(); // make form to send data (key, value)
            form.append('video', blob)

            return fetch('http://localhost:8080/analyze', {
                method: 'POST', // post method
                body: form, // body is the form but it can also be an object
            })
            .then(response => {
                if (response.ok) {
                    console.log("Data has been SUCCESFULLY sent.");
                } else {
                    console.log("Data has FAILED to send.");
                    
                }

                return response.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))

        })

    }
}