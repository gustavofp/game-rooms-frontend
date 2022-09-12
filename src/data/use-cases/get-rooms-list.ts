import { HttpClient } from "clients/interfaces/http-client";
import { API_URL } from "config/constants";
import { RoomsList } from "models/rooms-list";
import { GetRoomsListUseCase } from "interfaces/get-rooms-list";

export default class GetRoomsListUseCaseImp implements GetRoomsListUseCase {
    constructor(
        private httpClient: HttpClient
    ) { }
    
    async execute(): Promise<RoomsList> {
        try {
            const { data } = await this.httpClient.get(`${API_URL}/rooms`)
            console.log(data);
            
            return JSON.parse(data)
        } catch (err) {
            console.log(err)
            throw new Error('http error')
        }
    }
}