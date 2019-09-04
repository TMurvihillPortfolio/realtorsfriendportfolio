import React, { createContext, useState } from 'react';
import { _INITIAL_COMMENTS } from '../assets/constants';

export const CommentsContext = createContext();

export function CommentsProvider(props) {
    const [ comments, setComments ] = useState(_INITIAL_COMMENTS);
    function updateComments(commenter, room, comment) {
        //create new commenter object
        const commenterObj = {...comments[commenter], [room]: comment};
        //replace commenter object in state
        setComments({...comments, [commenter]: commenterObj});
    }
    return(
        <CommentsContext.Provider value={{ comments, updateComments }}>
            {props.children}
        </CommentsContext.Provider>
    );
}