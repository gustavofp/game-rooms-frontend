import { PlayerModel } from "domain/models/player";

export interface JoinRoomUseCase {
    execute: (roomId: string, player: PlayerModel) => Promise<void>
}