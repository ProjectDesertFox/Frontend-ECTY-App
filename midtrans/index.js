const midtransClient = require('midtrans-client');
// Create Snap API instance
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-ZMl3Dkx2hHikXKlVEGUtPQBI',
    clientKey: 'SB-Mid-client-yoFuSTXX_dIFM7mu'
});

let parameter = {
    "transaction_details": {
        "order_id": "2",
        "gross_amount": 100000
    }, "bank": {
        "secure": true
    }
};

snap.createTransaction(parameter)
    .then((transaction) => {
        // transaction token
        let transactionToken = transaction.token;
        console.log('transactionToken:', transactionToken);
    })