import Notify from 'simple-notify'

const beSoonNotif = () => {
    new Notify({
        title: 'Эта функция пока недоступна',
        text: 'Будет в ближайшем будущем',
        status: 'info',
        speed: 300,
        showCloseButton: false,
        effect: 'fade',
        customClass: 'based_notification'
    })
}

export {
    beSoonNotif
}