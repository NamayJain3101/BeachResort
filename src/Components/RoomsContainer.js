import React from 'react'
import withRoomConsumer from '../Context'
import Loading from './Loading';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';

const RoomsContainer = ({context}) => {

    const {loading, sortedRooms, rooms} = context;

    if(loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomsContainer)











// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//                     if(loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from rooms container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     );
// }

// export default RoomsContainer
