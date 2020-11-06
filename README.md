This project demonstrates the use axios library for http/ajax communication

1. You can make get, post, delete requests to particular api/url endpoints by using this library 

2. get request, 

    import axios from 'axios'

    class Test extends Components{
        const callAPI = () => {
            axios.get("api_url")
            .then( (response) => {
                // logic to execute when the response is returned
            })
        }
    }

Call to get or any method is actually an asynchronous call hence you don't get the output or response immediately
For this reason we have to call then method on the promise returned by it which receives the response from the api endpoint as an arguement.

3. post request : used when you want to send some data to the endpoint

    axios.post("api_url", data)         /* data here the data we want to send to the endpoint, this data can be in form of javascript object
                                            the axios library takes care of converting it into json format by stringfying it, in the same way as it converts the json data recieved from endpoint into javascript object */

    data = {
        name: "akash",
        age: 22
    }          
    axios.post("api_url", data)
    .then( (response) => {

    } )

4. catching errors : if the api call fails due to some reason or the api itself return some kind of error then the error handling mechanism provided by the axios library come into play. We can handle errors by just attaching the catch() method to the then() call which recieves the error response

    axios.get("api_url")
    .then( (resopnse) => {
        // logic when there is no error
    } )
    .catch( (error) => {
        // error handling logic
    } )

5.  NOTE: best place to perform these api calls is in componentDidMount() lifecycle method i.e. once the application is rendered, and also in the componentDidUpdate() lifecyle method 

6. Adding interceptors is one of the features for the axios, as the whole project uses the same axios configuration we can add some default configuration in axios object in the start itself. Or you can also create an axios instance of your own with custom configurations.

    interceptors are executed after every request is sent, hence used to alter or add custom information likes headers along with default

    axios.interceptors.request.use( (config) => {         // the method passes is called every time before a request is sent using axios
        config.headers = {
            custom_header_key : custom_header_value  
        }
        return config   // imp to return this config (updated)
    } )

You can also create your own instance of axios in the following way and define your own custom config into it,

    axiosInstance = axios.create( {
        baseURL: "",
        headers: "",
        .
        .
        .
    } )             // the create method takes a javascript object that defines the custom config of this axios instance

