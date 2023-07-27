import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const values = [19, 20, 34];
  for (let i = 0; i < 3; i += 1) {
    rooms.push(new ClassRoom(values[i]));
  }

  return rooms;
}
