import Rooms from "../../pages/rooms";
import { makeCreateRoomUseCase } from "../use-cases/create-room";
import { makeGetRoomsListUseCase } from "../use-cases/get-rooms-list";
import { makeUpdateRoomsFeedUseCase } from "../use-cases/update-rooms-feed";

export const makeRoomsPage: React.FC = () => {
  return (
    <Rooms
      getRoomsList={makeGetRoomsListUseCase()}
      updateRoomsFeed={makeUpdateRoomsFeedUseCase()}
      createRoomUseCase={makeCreateRoomUseCase()}
    />
  );
};
