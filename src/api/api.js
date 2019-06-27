import axios from 'axios'

let URL = "http://localhost:8081/"


const getMainList = (page, size, callback) => {
    let url = URL + "getHomeList?page=" + page + "&size=" + size
    axios.get(url).then(num => {
        callback && callback(num.data)
    })
}

export {
    getMainList
}
