import { HttpClient } from "infra/http-client";
import { API_URL } from "config/constants";
import { RoomModel } from "domain/models/room";
import { RoomsListModel } from "domain/models/rooms-list";
import { CreateRoomUseCase } from "domain/use-cases/create-room";

export default class CreateRoomUseCaseImp implements CreateRoomUseCase {
    constructor(
        private httpClient: HttpClient
    ) { }
    
    async execute(room: RoomModel): Promise<void> {
        try {
            const { data } = await this.httpClient.post(`${API_URL}/rooms`, room)
        } catch (err) {
            console.log(err)
            throw new Error('http error')
        }
    }
}