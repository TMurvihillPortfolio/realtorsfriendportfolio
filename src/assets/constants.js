import uuid from 'uuid';

const _MEDIA_QUERIES = {
    down(size){
        const sizes = {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px'
        }
        return `@media (max-width: ${sizes[size]})`
    }
}
const _INITIAL_COMMENTS = {   
    realtorComments: {
        living:'Living Room is open and spacious',
        kitchen:'Homey feel despite the high ceilings, appliances must be replaced',
        master:'Beautifully decorated'
    },
    buyerComments:{
        living:'Light fixtures are not us',
        kitchen:'Love the high ceiling, appliances are awful',
        master:'a little on the small side'
    },
    sellerComments:{
        living:'Lots of light throughout the day',
        kitchen:'Spent hours entaining friends in here',
        master:'Comfy and quiet'
    },
};
const _INITIAL_IMPROVEMENTS = {
    living: [
        {
            completed: false,
            improvement: 'paint',
            cost: 1400,
            estPriceAdj: 0,
            estTimeToSell: '2 weeks',
            notes: '',
            id: uuid() 
        },
        {
            completed: false,
            improvement: 'renovate',
            cost: '',
            estPriceAdj: '',
            estTimeToSell: '',
            notes: 'not recommended',
            id: uuid() 
        },
        {
            completed: true,
            improvement: 'replace carpet',
            cost: 2400,
            estPriceAdj: 1500,
            estTimeToSell: '1 month',
            notes: 'carpet in bad shape',
            id: uuid() 
        }       
    ],    
    kitchen: [
        {
            completed: false,
            improvement: 'replace cabinets',
            cost: 4000,
            estPriceAdj: 1500,
            estTimeToSell: '3 weeks',
            notes: '',
            id: uuid()
        },
        {
            completed: false,
            improvement: 'touch up counter-top',
            cost: 600,
            estPriceAdj: 500,
            estTimeToSell: '0 weeks',
            notes: '',
            id: uuid()
        },
        {
            completed: false,
            improvement: 'new appliances',
            cost: 6500,
            estPriceAdj: 0,
            estTimeToSell: '3 months',
            notes: 'fridge, dishwasher, stove must be replaced',
            id: uuid()
        },
        {
            completed: false,
            improvement: 'new lighting over island',
            cost: 1400,
            estPriceAdj: 300,
            estTimeToSell: '0 weeks',
            notes: '',
            id: uuid()
        }
    ],
    master: [
        {
            completed: false,
            improvement: 'paint',
            cost: 2500,
            estPriceAdj: 0,
            estTimeToSell: '3 weeks',
            notes: '',
            id: uuid() 
        },
        {
            completed: false,
            improvement: 'replace carpet',
            cost: 4000,
            estPriceAdj: 400,
            estTimeToSell: '0 weeks',
            notes: '',
            id: uuid() 
        }
    ]
}
const _FULL_ROOM_NAME = {
    living: 'Living Room',
    kitchen: 'Kitchen',
    master: 'Master Bedroom'
}
export { 
    _MEDIA_QUERIES, 
    _INITIAL_COMMENTS, 
    _INITIAL_IMPROVEMENTS, 
    _FULL_ROOM_NAME 
};