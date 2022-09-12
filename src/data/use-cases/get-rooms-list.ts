import { HttpClient } from "infra/http-client";
import { API_URL } from "config/constants";
import { RoomsList } from "domain/models/rooms-list";
import { GetRoomsListUseCase } from "domain/use-cases/get-rooms-list";

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