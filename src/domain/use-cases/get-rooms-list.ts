import { RoomsList } from "models/rooms-list"

export interface GetRoomsListUseCase {
    execute: () => Promise<RoomsList>
}