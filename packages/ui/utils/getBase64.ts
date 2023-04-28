export const getBase64: (file: File) => Promise<string> = async file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result.toString())
            }
        }

        reader.onerror = error => {
            reject(new Error(error.toString()))
        }
    })
}
