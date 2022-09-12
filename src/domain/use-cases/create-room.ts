import { Room } from "domain/models/room"

export interface CreateRoomUseCase {
    execute: (room: Room) => Promise<void>
}