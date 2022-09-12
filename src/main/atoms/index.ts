import { atom, RecoilState } from 'recoil'
import { Room } from 'domain/models/room'

export const roomsListState: RecoilState<Room[]> = atom<Room[]>({
    key: 'roomsList',
    default: []
})

export const selectedRoomState: RecoilState<Room | null> = atom<Room | null>({
    key: 'selectedRoom',
    default: null
})

export const createRoomVisibleState: RecoilState<Boolean> = atom<Boolean>({
    key: 'createRoomVisible',
    default: false
})