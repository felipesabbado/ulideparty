async function getData(user){
    /**
     *  online version
     *
     * */

    /*var targetUrl = 'https://ulide-party-api.herokuapp.com/api/user'


    const response = await fetch(targetUrl)
    const data = await response.json()
    console.log(data)
    return data*/

    /**
     *  offline version
     *
     * */

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://ulide-party-api.herokuapp.com/api/users/' + user


    const response = await fetch(
        proxyUrl + targetUrl)
    const data = await response.json()
    console.log(data)
    return data

}