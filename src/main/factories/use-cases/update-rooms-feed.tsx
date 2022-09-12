import { UpdateRoomsFeedUseCase } from "domain/use-cases/update-rooms-feed";
import UpdateRoomsFeedUseCaseImpl from "data/use-cases/update-rooms-feed";
import SocketClientPhoenix from "main/adapters/socket-client-phoenix";
import { SOCKET_URL } from "config/constants";

export const makeUpdateRoomsFeedUseCase = (): UpdateRoomsFeedUseCase => {
  const socketClient = new SocketClientPhoenix(SOCKET_URL);
  return new UpdateRoomsFeedUseCaseImpl(socketClient);
};
