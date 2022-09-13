import { RoomModel } from "domain/models/room"
import { RoomsListModel } from "domain/models/rooms-list"

export interface UpdateRoomsFeedUseCase {
    execute: (callback: (rooms: RoomModel[]) =>  void) => void
}