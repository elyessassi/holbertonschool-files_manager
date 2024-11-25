
import {createClient} from "redis"

class RedisClient{
    constructor(){
        this.Rclient = createClient()
        this.Rclient.connect()
        this.Rclient.on("error", (error) => {console.log(error)})
    }


    isAlive() {
        return this.Rclient.isOpen
    }
    

    async get(key) {
        return await this.Rclient.get(key)
    }

    set(key, value, time){
        this.Rclient.set(key, value, {EX: time})
    }

    async del(key){
        await this.Rclient.del(key)
    }

}

const redisClient = new RedisClient

export default redisClient