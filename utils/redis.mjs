
import {createClient} from "redis"

class RedisClient{
    constructor(){
        this.Rclient = createClient()
        console.log(typeof this.Rclient.connect)
        this.Rclient.connect()
        this.Rclient.on("error", (error) => {console.log(error)})
    }


    isAlive() {
        try {
            this.Rclient.isOpen
            return(true)
        }
        catch(err){
            return(false)
        }
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