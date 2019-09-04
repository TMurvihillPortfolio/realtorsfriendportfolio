import React, { useContext, Component, createContext } from 'react';
import { _INITIAL_IMPROVEMENTS } from '../assets/constants';

export const ImprovementsContext = createContext();

export class ImprovementsProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { improvements: _INITIAL_IMPROVEMENTS }
    }
    render() {
        return(
            <ImprovementsContext.Provider value={{...this.state}}>
               {this.props.children}
            </ImprovementsContext.Provider>
        );
    }
}