import { kofi } from '@ko-fi/next';

export default kofi({
    onData: (data, req) => {
        console.log('onData called');
    },
    onCommission: (data, req) => {
        console.log('onCommission called');
    },
    onDonation: (data, req) => {
        console.log('onDonation called');
    },
    onShopOrder: (data, req) => {
        console.log('onShopOrder called');
    },
    onSubscription: (data, req) => {
        console.log('onSubscription called');
    },
});
