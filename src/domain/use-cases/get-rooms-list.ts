import { RoomsList } from "domain/models/rooms-list"

export interface GetRoomsListUseCase {
    execute: () => Promise<RoomsList>
}