import { Room } from "models/room"
import { RoomsList } from "models/rooms-list"

export interface UpdateRoomsFeedUseCase {
    execute: (callback: (rooms: RoomsList) =>  RoomsList) => void
}