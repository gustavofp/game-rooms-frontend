import { RoomsListModel } from "domain/models/rooms-list"

export interface GetRoomsListUseCase {
    execute: () => Promise<RoomsListModel>
}