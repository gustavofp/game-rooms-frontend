import { PlayerModel } from "./player"

export type RoomModel = {
    id?: string
    name: string
    status?: string
    max_players: number,
    players: PlayerModel[]
}