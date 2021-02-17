export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (errors) {
        console.log('Error getting data from localStorage', errors)
        return null
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (errors) {
        console.log('Error saving data in localStorage', errors)
    }
}