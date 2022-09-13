import { RoomModel } from "domain/models/room"

export interface CreateRoomUseCase {
    execute: (room: RoomModel) => Promise<void>
}