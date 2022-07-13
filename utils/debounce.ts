let timer: NodeJS.Timeout

export default function debounce<Params extends unknown[]>(
    callback: (...args: Params) => void,
    timeout = 300
){
    return (...args: Params) => {
        clearTimeout(timer)
        function callCallback () {
            callback(...args);
        }
        timer = setTimeout(callCallback, timeout)
    }
}
