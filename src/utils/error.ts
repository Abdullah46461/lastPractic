
const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не найден',
    INVALID_ID_PASSWORD: 'Пользователь с таким паролем не найден',
    INVALID_LOGIN_CREDENTIALS: 'Неверный логин или пароль'
}

export function error(code){
    return ERROR_CODES [code] ? ERROR_CODES [code] : 'Неизвестная ошибка'
}
