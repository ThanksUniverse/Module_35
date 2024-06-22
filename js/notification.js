document.addEventListener("DOMContentLoaded", function () {
    getNotifications();
});

function getNotifications() {
    if (!("Notification" in window)) {
        console.log('Navegador não suporta notificações');
        return;
    }

    if (!document.hidden) {
        if (Notification.permission === "granted") {
            showNotification('Olá, bem-vindo(a) de volta!', 'Temos novos animais para adoção!');
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    showNotification('Olá, bem-vindo(a)!', 'Te avisaremos por aqui sempre que tivermos um novo animalzinho para adoção!');
                }
            });
        }
    }
}

function showNotification(title, message) {
    const options = {
        body: message,
        icon: './images/logomarca.PNG'
    };
    const notify = new Notification(title, options);

    setTimeout(notify.close.bind(notify), 5000);
}

document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
        getNotifications();
    }
});
