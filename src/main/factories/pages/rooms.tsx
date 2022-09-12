import Rooms from "presentation/pages/rooms";
import { makeCreateRoomUseCase } from "main/factories/use-cases/create-room";
import { makeGetRoomsListUseCase } from "main/factories/use-cases/get-rooms-list";
import { makeUpdateRoomsFeedUseCase } from "main/factories/use-cases/update-rooms-feed";

export const makeRoomsPage: React.FC = () => {
  return (
    <Rooms
      getRoomsList={makeGetRoomsListUseCase()}
      updateRoomsFeed={makeUpdateRoomsFeedUseCase()}
      createRoomUseCase={makeCreateRoomUseCase()}
    />
  );
};
