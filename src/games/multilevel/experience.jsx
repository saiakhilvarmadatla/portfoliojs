import { Physics } from '@react-three/rapier'
import useGame from './useGame.jsx'
import Lights from './lights.jsx'
import { Level } from './level.jsx'
import Player from './player.jsx'

export default function Experience(){
    const blocksCount = useGame((state) => state.blocksCount);
    const blocksSeed = useGame(state => state.blocksSeed);

    return <>
        <color args={['#bdedfc']} attach="background" />

        <Physics debug={false}>
            <Lights />
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />
        </Physics>
    </>
};