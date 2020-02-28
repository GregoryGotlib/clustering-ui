const initialState = {
    centroids:[
        {cntName:"gramkat, inc.",group:
        [{name:"gramkat estates, inc.", value:16}, 
        {name:"gramkat, inc.", value:30},
        {name:"gramkai, inc.", value:30},
        {name:"gramkaibooks", value:26}],
       },
       {cntName:"bozeman enterprises",group:
        [{name:"bozeman ent.", value:9}, 
        {name:"bozeman enterprises", value:25},
        {name:"bozerman enterprises", value:11},
        {name:"bozeman enterprises", value:25}],
       },
       {cntName:"bbazemax estates, ltd",group:
        [{name:"bbazemax estates, ltd", value:12},
        {name:"bras5emax estates, l.t.d.", value:8},
        {name:"brazemax estatys,ltd", value:12}],
       }
       ],
       groupIndex:'',
       newCntIndex:''
}

export default function(state = initialState , action){
    debugger
    switch(action.type){
        case 'GET_CENTEROIDS':
            return{
                ...state,
                newCntIndex:action.newCntIndex,
                groupIndex:action.groupIndex
            };
        default:
            return state;
    }
}