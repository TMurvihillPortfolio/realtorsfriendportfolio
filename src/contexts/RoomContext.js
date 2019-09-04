import React, { Component, createContext } from 'react';
//#region home images
import livingImage from '../img/livingroom.jpg';
import kitchenImage from '../img/kitchen.jpg';
import masterImage from '../img/masterbedroom.jpg';
//#endregion

export const RoomContext = createContext();

export class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.setRoom=this.setRoom.bind(this);
        this.setToggleTableRerender=this.setToggleTableRerender.bind(this);
        this.state= { 
            room: 'kitchen', 
            roomImage: masterImage, 
            toggleTableRerender: true 
        }
    }
    setRoom(e) {
        if (e.target.value==='living') this.setState({ 
            room: e.target.value,
             roomImage : livingImage, 
            toggleTableRerender : !(this.state.toggleTableRerender) 
        });
        if (e.target.value==='kitchen') this.setState({ 
            room: e.target.value, 
            roomImage : kitchenImage, 
            toggleTableRerender : !(this.state.toggleTableRerender)
        });
        if (e.target.value==='master') this.setState({ 
            room: e.target.value,
            roomImage : masterImage, 
            toggleTableRerender : !(this.state.toggleTableRerender) 
        });
    }
    setToggleTableRerender() {
        this.setState({ toggleTableRerender : !(this.state.toggleTableRerender) });
    }
    render() {
        return(
            <RoomContext.Provider value={{
                ...this.state, 
                setRoom: this.setRoom,
                setToggleTableRerender: this.setToggleTableRerender 
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );       
    }
}