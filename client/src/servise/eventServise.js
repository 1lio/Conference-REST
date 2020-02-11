import axios from 'axios'

const baseURL = 'http://127.0.0.1:3000/api/events/';

const statusPlaned = `http://127.0.0.1:3000/api/events/:status=`;

class EventServise {
    // get events
    static getEvents(index) {
        let status = statusPlaned;
        return new Promise(async (resolve, reject) => {
            try {
                let st = status;
                st += index;

                const res = await axios.get(st);
                const data = res.data;
                resolve(data.map(event => ({...event})))
            } catch (err) {
                reject(err)
            }
        })
    }

    // delete events
    static deletePost(itemID) {
        console.log(itemID);
        return axios.delete(baseURL, {data: {id: itemID}})
    }
}

export default EventServise
