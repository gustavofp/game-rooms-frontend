import { UpdateRoomsFeedUseCase } from "../../use-cases/interfaces/update-rooms-feed";
import UpdateRoomsFeedUseCaseImpl from "../../use-cases/implementations/update-rooms-feed";
import SocketClientPhoenix from "../../clients/adapters/socket-client-phoenix";
import { SOCKET_URL } from "../../config/constants";

export const makeUpdateRoomsFeedUseCase = (): UpdateRoomsFeedUseCase => {
  const socketClient = new SocketClientPhoenix(SOCKET_URL);
  return new UpdateRoomsFeedUseCaseImpl(socketClient);
};
