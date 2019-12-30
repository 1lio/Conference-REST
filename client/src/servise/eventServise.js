import axios from 'axios'
import VueSocketIO from 'vue-socket.io'

const baseURL = 'http://185.195.26.71:3000/api/events/'

const statusPlaned = `${baseURL}status/?status=`

class EventServise {
    // get events
    static getEvents(index) {
        let status = statusPlaned
        return new Promise(async (resolve, reject) => {
            try {
                let st = status
                st += index

                const res = await axios.get(st)
                const data = res.data
                resolve(data.map(event => ({...event})))
            } catch (err) {
                reject(err)
            }
        })
    }

    // create events
    //static insertPost=(title, time, date) => axios.post(status, {title, time, date})

    // delete events
    static deletePost(itemID) {
        console.log(itemID)
        return axios.delete(baseURL, {data: {id: itemID}})
    }
}

export default EventServise
