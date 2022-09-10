import axios, { Axios } from 'axios'
import { HttpClient, HttpResponse } from '../interfaces/http-client'

export default class HttpClientAxios implements HttpClient {
    axios: Axios
    constructor() {
        this.axios = new Axios({ headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
          }})
    }
    
    async get(url: string): Promise<HttpResponse> {
        return await this.axios.get(url, {})
    }

    async post(url: string, body: Object): Promise<HttpResponse> {
        return await this.axios.post(url, JSON.stringify(body))
    }
}