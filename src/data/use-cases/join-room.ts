import { HttpClient } from "infra/http-client";
import { API_URL } from "config/constants";
import { RoomModel } from "domain/models/room";
import { JoinRoomUseCase } from "domain/use-cases/join-room";
import { PlayerModel } from "domain/models/player";

export default class JoinRoomUseCaseImp implements JoinRoomUseCase {
    constructor(
        private httpClient: HttpClient
    ) { }
    
    async execute(roomId: string, player: PlayerModel): Promise<void> {
        try {
            const { data } = await this.httpClient.put(`${API_URL}/rooms/join/${roomId}`, { player })
        } catch (err) {
            console.log(err)
            throw new Error('http error')
        }
    }
}