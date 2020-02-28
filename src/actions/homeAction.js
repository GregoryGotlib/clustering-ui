export const changeCenteroid = (groupIndex,newCntIndex) => dispatch =>{
    dispatch({
        type:'GET_CENTEROIDS',
        payload:'',
        groupIndex:groupIndex,
        newCntIndex:newCntIndex
    })
};

export const getInitialState = () => dispatch =>{
    dispatch({
        type:'',
        payload:''
    })
};
