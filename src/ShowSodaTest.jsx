import { useState, useEffect } from "react";

const ShowSodaTest = () => {

    const [soda, setSoda] = useState([]);

    useEffect( () => { 

        const url = "https://script.google.com/macros/s/AKfycbyn9N0j1yT_f9C-eIfpVUBXnBUfbgZR2ttSU9jcOpiwJb0wdnIkA7PRI4LBtX6XwcKQFA/exec";

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setSoda(data);
            });

    }, [] );


    return (

        <div>
            <h1>testing</h1>
            <p>{JSON.stringify(soda.DATA)}</p>


        </div>

    );




};