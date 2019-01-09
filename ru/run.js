web({
    contractAddress: "TTL3w3MEvkaBBYurE2HkWGEAZ1LQZwcb6U",
    mainnet: true,
    text: {
        form: {
            errors: {
                extension: "Пожалуйста, авторизуйте в TronLink или TronPay",
                minimal: "Минимальный депозит: 100 TRX",
                balance: "Недостаточный баланс на кошельке",
                fee: "Необходимо оставить на балансе как мимумум 1 TRX для комиссии"
            }
        },
        tx: {
            confirm: "Подтвердите созданную транзакцию в своем Tron кошельке",
            button: "OK",
            success: "Транзакция отправлена",
            errors: {
                fail: "Невозможно создать транзакцию. Попробуйте перезагрузить страницу",
                revert: "Во время выполнения транзакции произошла ошибка. Убедитесь, что у вас достаточно Energy или TRX, чтобы заплатить за комиссию транзакции",
                reject: "Вы отменили транзакцию"
            }
        }
    }
});