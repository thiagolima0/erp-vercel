import { Ref, ref } from 'vue'

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const value = ref<T>(initialValue) as Ref

    const getValueFromLocalStorage = (): T => {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item) as T
        }
        return initialValue
    }

    const setValueToLocalStorage = (newValue: T) => {
        value.value = newValue
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    const removeValueFromLocalStorage = () => {
        value.value = initialValue
        localStorage.removeItem(key)
    }

    value.value = getValueFromLocalStorage()

    return {
        value,
        setValue: setValueToLocalStorage,
        removeValue: removeValueFromLocalStorage,
    }
}

export default useLocalStorage
export { useLocalStorage }
