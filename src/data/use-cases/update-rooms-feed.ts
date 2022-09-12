import { SocketClient } from "clients/interfaces/socket-client";
import { RoomsList } from "models/rooms-list";
import { UpdateRoomsFeedUseCase } from "interfaces/update-rooms-feed";

export default class UpdateRoomsFeedUseCaseImpl implements UpdateRoomsFeedUseCase {
  constructor(private readonly socketClient: SocketClient) {}

  execute(callback: (rooms: RoomsList) => RoomsList): void {
    this.socketClient.join("rooms:lobby");
    this.socketClient.handleEvent("feed_updated", (data: any) => {
        return callback(data.rooms);
    });
  }
}
