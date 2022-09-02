import axios, { Axios } from 'axios'
import { HttpClient, HttpResponse } from '../interfaces/http-client'

export default class HttpClientAxios implements HttpClient {
    axios: Axios
    constructor() {
        this.axios = new Axios()
    }
    
    async get(url: string): Promise<HttpResponse> {
        return await this.axios.get(url)
    }
}