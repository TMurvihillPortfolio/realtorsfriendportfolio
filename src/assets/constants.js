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
        living:'Realtor comments for Living Room',
        kitchen:'',
        master:''
    },
    buyerComments:{
        living:'',
        kitchen:'Buyer comments for kitchen',
        master:''
    },
    sellerComments:{
        living:'',
        kitchen:'',
        master:'Seller comments for master'
    },
};
const _INITIAL_IMPROVEMENTS = {
    living: [
        {
            newCompleted: false,
            completed: false,
            improvement: 'paint',
            cost: 1400,
            estPriceAdj: 0,
            estTimeToSell: '2 weeks',
            notes: '',
            id: uuid() 
        },
        {
            newCompleted: false,
            completed: false,
            improvement: 'renovate',
            cost: '',
            estPriceAdj: '',
            estTimeToSell: '',
            notes: 'not recommended',
            id: uuid() 
        },
        {
            newCompleted: true,
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
        }
    ],
    master: [
        {
            completed: false,
            improvement: 'paint',
            cost: 400,
            estPriceAdj: 0,
            estTimeToSell: '0 weeks',
            notes: '',
            id: uuid() 
        },
        {
            completed: false,
            improvement: 'replace carpet',
            cost: 400,
            estPriceAdj: 0,
            estTimeToSell: '0 weeks',
            notes: '',
            id: uuid() 
        }
    ]
}
export { _MEDIA_QUERIES, _INITIAL_COMMENTS, _INITIAL_IMPROVEMENTS };

// function createData(completed, improvement, cost, estPriceAdj, estTimeToSell, notes, id) {
//     return { completed, improvement, cost, estPriceAdj, estTimeToSell, notes, id };
//   }

    // renovate: {
    //     completed: '',
    //     cost: '',
    //     estPriceAdj: '',
    //     estTimeToSell: '',
    //     notes: 'not recommended',
    //     id: uuid() 
    // }
// },
// {
    // replaceCarpet: 
    // completed: true,
    // cost: 2400,
    // estPriceAdj: 1500,
    // estTimeToSell: '1 month less',
    // notes: 'carpet in bad shape',
    // id: uuid() 
// },
// {
//     completed: '',
//     improvement: '',
//     cost: '',
//     estPriceAdj: '',
//     estTimeToSell: '',
//     notes: '',
//     id: uuid() 
// }
// }         
