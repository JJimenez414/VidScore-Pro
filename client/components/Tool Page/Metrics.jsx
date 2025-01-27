    function Metrics({option1 = 90, option2 = 10, option3 = 60, option4 = 80}) {
        
        // based on the score we will give it a different color.
        function background(percent) {

            if (percent <= 50) {
                return "bg-danger";
            } else if (percent < 70) {
                return "bg-warning";
            } else {
                return "bg-success";
            }

        }

        let option1Background = background(option1);
        let option2Background = background(option2);
        let option3Background = background(option3);
        let option4Background = background(option4);
        

        return (

            // diplays progress bars
            <div className='metrics-container'>

                <div className="progress progress-bar-styling" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ height: "70px" }}>
                    <div className={"progress-bar progress-bar-striped " + option1Background} style={{ width: option1+"%" }}>
                        {option1 + "%"}
                    </div>
                </div>
                <div className="progress progress-bar-styling" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ height: "70px" }}>
                    <div className={"progress-bar progress-bar-striped " + option2Background} style={{ width: option2+"%" }}>
                        {option2 + "%"}
                    </div>
                </div>  

                <div className="progress progress-bar-styling" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ height: "70px" }}>
                    <div className={"progress-bar progress-bar-striped " + option3Background} style={{ width: option3+"%" }}>
                        {option3 + "%"}
                    </div>
                </div>  

                <div className="progress progress-bar-styling" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ height: "70px" }}>
                    <div className={"progress-bar progress-bar-striped " + option4Background} style={{ width: option4+"%" }}>
                        {option4 + "%"}
                    </div>
                </div>  

            </div>
        )
    }

    export default Metrics