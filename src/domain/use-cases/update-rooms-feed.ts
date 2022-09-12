import { Room } from "domain/models/room"
import { RoomsList } from "domain/models/rooms-list"

export interface UpdateRoomsFeedUseCase {
    execute: (callback: (rooms: RoomsList) =>  RoomsList) => void
}