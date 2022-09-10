import { HttpClient } from "../../clients/interfaces/http-client";
import { API_URL } from "../../config/constants";
import { Room } from "../../models/room";
import { RoomsList } from "../../models/rooms-list";
import { CreateRoomUseCase } from "../interfaces/create-room";

export default class CreateRoomUseCaseImp implements CreateRoomUseCase {
    constructor(
        private httpClient: HttpClient
    ) { }
    
    async execute(room: Room): Promise<void> {
        try {
            const { data } = await this.httpClient.post(`${API_URL}/rooms`, room)
        } catch (err) {
            console.log(err)
            throw new Error('http error')
        }
    }
}