import HttpClientAxios from "../../clients/adapters/http-client-axios";
import { CreateRoomUseCase } from "../../use-cases/interfaces/create-room";
import CreateRoomUseCaseImp from "../../use-cases/implementations/create-room";

export const makeCreateRoomUseCase = (): CreateRoomUseCase => {
  const httpClient = new HttpClientAxios();
  return new CreateRoomUseCaseImp(httpClient);
};
