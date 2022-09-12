import { SocketClient } from "infra/socket-client";
import { RoomsList } from "domain/models/rooms-list";
import { UpdateRoomsFeedUseCase } from "domain/use-cases/update-rooms-feed";

export default class UpdateRoomsFeedUseCaseImpl implements UpdateRoomsFeedUseCase {
  constructor(private readonly socketClient: SocketClient) {}

  execute(callback: (rooms: RoomsList) => RoomsList): void {
    this.socketClient.join("rooms:lobby");
    this.socketClient.handleEvent("feed_updated", (data: any) => {
        return callback(data.rooms);
    });
  }
}
