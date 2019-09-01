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
export { _MEDIA_QUERIES, _INITIAL_COMMENTS };
