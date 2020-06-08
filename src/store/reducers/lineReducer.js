const initState = {
    lines: [
        {
            id: 0, title: 'Right knee', color: 'red',
            events: [
                {
                    id: 0,
                    type: 'O',
                    title: 'Ligaments breaking',
                    description: 'Breaking ligaments while playing football'
                },
                {
                    id: 1,
                    type: 'MT',
                    title: 'Resonance of right knee',
                    description: 'Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments. Right knee was tested after breaking the anterior cruciate ligaments.'
                }
            ]
        },
        {
            id: 1, title: 'Back', color: 'green',
            events: [
                {
                    id: 0,
                    type: 'O',
                    title: 'Pain in back',
                    description: 'Pain in back when working with laptop'
                },
                {
                    id: 1,
                    type: 'MA',
                    title: 'Skoliosis affirmation',
                    description: 'Dr. Smith affirmed scoliosis'
                }
            ]
        }
    ]
}

const lineReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_LINE':
            console.log('line added');
            return state;
        case 'ADD_LINE_ERROR':
            console.log('line addition error');
            return state;
        case 'ADD_EVENT':
            // let line = state.lines.find(line => parseInt(action.id) === parseInt(line.id))
            // line.events = [...line.events, action.event];
            // return {
            //     ...state
            // }
            console.log('event added');
            return state;
        case 'ADD_EVENT_ERROR':
            console.log('event addition error');
            return state;
            case 'DELETE_LINE':
                console.log('line deleted');
                return state;
            case 'DELETE_LINE_ERROR':
                console.log('line deletion error');
                return state;
        default:
            return state;
    }
}

export default lineReducer;