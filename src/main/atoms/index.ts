import { atom, RecoilState } from 'recoil'
import { RoomModel } from 'domain/models/room'
import { PlayerModel } from 'domain/models/player'

export const roomsListState: RecoilState<RoomModel[]> = atom<RoomModel[]>({
    key: 'roomsList',
    default: []
})

export const selectedRoomState: RecoilState<RoomModel | null> = atom<RoomModel | null>({
    key: 'selectedRoom',
    default: null
})

export const createRoomVisibleState: RecoilState<Boolean> = atom<Boolean>({
    key: 'createRoomVisible',
    default: false
})

export const setPlayer: RecoilState<PlayerModel> = atom<PlayerModel>({
    key: 'setPlayer',
    default: {
        name: ''
    }
})