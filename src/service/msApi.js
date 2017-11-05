// a library to wrap and simplify api calls
import apisauce from 'apisauce'
// import { BaseUrl } from '../Config/ApiConfig'


// our "constructor"
const create = (baseURL = "https://mnw-api.herokuapp.com/") => {
    // ------
    // STEP 1
    // ------
    //
    // Create and configure an apisauce-based api object.
    //
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            // 'Cache-Control': 'no-cache'
            // 'Access-Control-Allow-Origin': 'true'
        },
        // 10 second timeout...
        timeout: 5000
    })

    // ------
    // STEP 2
    // ------
    //
    // Define some functions that call the api.  The goal is to provide
    // a thin wrapper of the api layer providing nicer feeling functions
    // rather than "get", "post" and friends.
    //
    // I generally don't like wrapping the output at this level because
    // sometimes specific actions need to be take on `403` or `401`, etc.
    //
    // Since we can't hide from that, we embrace it by getting out of the
    // way at this level.
    //
    // const getRoot = () => api.get('')
    // const getRate = () => api.get('rate_limit')
    // const getUser = (username) => api.get('search/users', { q: username })

    // const verifyDriverNumber = (phone) => api.post('auth/otp', { phone, deviceOS: "iOS", app_name: "DRIVER" })
    const registerNewClient = (data) => api.post('ms/registerNewClient', data)
    // const verifyOtp = (otp, phone) => api.post('auth/otp/verify', { phone, otp, deviceOS: "iOS", app_name: "DRIVER" })

    // const verifyDriverNumber = (phone) => api.post('auth/otp', { phone, deviceOS: "iOS", app_name: "DRIVER" })
    // const verifyOtp = (otp, phone) => api.post('auth/otp/verify', { phone, otp, deviceOS: "iOS", app_name: "DRIVER"})


    // const updateDriverLocation=(token,driver_id,latitude,longitude)=>api.put('drivers/'+driver_id+'?api_token='+ token,{latitude,longitude})

    // const updateDriverLocation = (token, driver_id, latitude, longitude) => api.post('driver_locations?api_token=' + token, { 'driver_id': driver_id, 'lat': latitude, 'lng': longitude })

    // ------
    // STEP 3
    // ------
    //
    // Return back a collection of functions that we would consider our
    // interface.  Most of the time it'll be just the list of all the
    // methods in step 2.
    //
    // Notice we're not returning back the `api` created in step 1?  That's
    // because it is scoped privately.  This is one way to create truly
    // private scoped goodies in JavaScript.
    //
    return {
        // a list of the API functions from step 2
        registerNewClient,
        // verifyDriverNumber,
        // verifyOtp,
        // updateDriverLocation
    }
}

// let's return back our create method as the default.
export default {
    create
}
