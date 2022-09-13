import JoinRoomUseCaseImp from "data/use-cases/join-room"
import HttpClientAxios from "main/adapters/http-client-axios"

export const makeJoinRoomUseCase = () => {
    const httpClient = new HttpClientAxios()

    return new JoinRoomUseCaseImp(httpClient)
}