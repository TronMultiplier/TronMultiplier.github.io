web({
    contractAddress: "TTL3w3MEvkaBBYurE2HkWGEAZ1LQZwcb6U",
    mainnet: true,
    text: {
        form: {
            errors: {
                extension: "Please login to TronLink or TronPay",
                minimal: "Minimum deposit: 100 TRX",
                balance: "Lack of TRX balance on the wallet",
                fee: "You need to leave at least 1 TRX on your balance to pay transaction fee"
            }
        },
        tx: {
            confirm: "Confirm the created transaction in your Tron wallet",
            button: "OK",
            success: "Transaction sent",
            errors: {
                fail: "Unable to create transaction. Try to reload the page",
                revert: "An error occurred while sending the transaction. Make sure you have enough Energy or TRX to pay the transaction fee",
                reject: "Transaction cancelled by you"
            }
        }
    }
});