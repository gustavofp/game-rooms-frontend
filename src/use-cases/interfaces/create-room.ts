import { Room } from "../../models/room"

export interface CreateRoomUseCase {
    execute: (room: Room) => Promise<void>
}