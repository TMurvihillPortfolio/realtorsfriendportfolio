import React, { createContext, useState } from 'react';
//#region import room images
import livingImage from '../img/livingroom.jpg';
import kitchenImage from '../img/kitchen.jpg';
import masterImage from '../img/masterbedroom.jpg';
//#endregion

export const RoomContext = createContext();

export function RoomProvider(props) {
    const [ room, setRoom ] = useState('living');
    const [ roomImage, setRoomImage ] = useState(livingImage);
    const [ toggleTableRerender, setToggleTableRerender ] = useState(true);
        
    function changeRoom(e) {
        //change room and trigger table rerender
        setRoom(e.target.value);
        setToggleTableRerender(!toggleTableRerender);                
        //change room image
        switch (e.target.value) {
            case 'living':
                setRoomImage(livingImage);
                break;
            case 'kitchen':               
                setRoomImage(kitchenImage);                
                break;
            case 'master':               
                setRoomImage(masterImage);                
                break;
            default:
                //NOT YET IMPLEMENTED error code here
        }       
    }
    function changeToggleTableRerender() {
        setToggleTableRerender(!toggleTableRerender);
    }
    return(
        <RoomContext.Provider value={{
            room, 
            roomImage, 
            changeRoom,
            toggleTableRerender, 
            changeToggleTableRerender
        }}>
            {props.children}
        </RoomContext.Provider>
    );     
}