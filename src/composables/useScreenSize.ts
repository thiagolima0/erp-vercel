import { ref, onMounted, onUnmounted } from 'vue'

const useScreenSize = () => {
    const screenWidth = ref(window.innerWidth)
    const screenHeight = ref(window.innerHeight)

    const updateScreenSize = () => {
        screenWidth.value = window.innerWidth
        screenHeight.value = window.innerHeight
    }

    onMounted(() => {
        window.addEventListener('resize', updateScreenSize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', updateScreenSize)
    })

    return {
        screenWidth,
        screenHeight,
    }
}

export default useScreenSize
export { useScreenSize }
