import { GetRoomsListUseCase } from "../../use-cases/interfaces/get-rooms-list";
import GetRoomsListUseCaseImp from "../../use-cases/implementations/get-rooms-list";
import HttpClientAxios from "../../clients/adapters/http-client-axios";

export const makeGetRoomsListUseCase = (): GetRoomsListUseCase => {
  const httpClient = new HttpClientAxios();
  return new GetRoomsListUseCaseImp(httpClient);
};
