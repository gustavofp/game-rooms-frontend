import { SocketClient } from "infra/socket-client";
import { RoomsListModel } from "domain/models/rooms-list";
import { UpdateRoomsFeedUseCase } from "domain/use-cases/update-rooms-feed";
import { RoomModel } from "domain/models/room";

export default class UpdateRoomsFeedUseCaseImpl implements UpdateRoomsFeedUseCase {
  constructor(private readonly socketClient: SocketClient) {}

  execute(callback: (rooms: RoomModel[]) => void): void {
    this.socketClient.join("rooms:lobby");
    this.socketClient.handleEvent("feed_updated", (data: any) => {
        return callback(data.rooms);
    });
  }
}
