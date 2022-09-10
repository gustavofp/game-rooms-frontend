import { Player } from "./player"

export type Room = {
    id?: string
    name: string
    status?: string
    max_players: number,
    players: Player[]
}