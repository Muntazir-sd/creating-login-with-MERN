/** image onto base64 */
export  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const srcData = fileReader.result;
            resolve(srcData)
        }
        fileReader.onerror = (error)=> {
            reject(error)
        }
    })
}

