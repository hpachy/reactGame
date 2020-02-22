import Player from './component/Player';
import container from './container';
import { handleMovement } from './component/utilities/movement';

export default container(handleMovement(Player));
