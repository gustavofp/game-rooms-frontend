import { GetRoomsListUseCase } from "domain/use-cases/get-rooms-list";
import GetRoomsListUseCaseImp from "data/use-cases/get-rooms-list";
import HttpClientAxios from "main/adapters/http-client-axios";

export const makeGetRoomsListUseCase = (): GetRoomsListUseCase => {
  const httpClient = new HttpClientAxios();
  return new GetRoomsListUseCaseImp(httpClient);
};
