const useCookies = () => {
    const setCookie = (
        name: string,
        value: string | boolean | number,
        days: number
    ) => {
        const expires = new Date()
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
    }

    const getCookie = (name: string) => {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1)
            }
        }
        return null
    }

    const removeCookie = (name: string) => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
    }

    return {
        setCookie,
        getCookie,
        removeCookie,
    }
}

export default useCookies
export { useCookies }
