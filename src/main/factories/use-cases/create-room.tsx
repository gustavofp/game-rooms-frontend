import HttpClientAxios from "main/adapters/http-client-axios";
import { CreateRoomUseCase } from "domain/use-cases/create-room";
import CreateRoomUseCaseImp from "data/use-cases/create-room";

export const makeCreateRoomUseCase = (): CreateRoomUseCase => {
  const httpClient = new HttpClientAxios();
  return new CreateRoomUseCaseImp(httpClient);
};
