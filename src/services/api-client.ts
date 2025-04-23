import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'50b6c5425b494024bf893b952945031b'
    }
})