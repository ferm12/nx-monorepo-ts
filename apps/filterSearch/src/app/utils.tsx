export function debouncer(cb, delay) {
    
    let timeoutId;

    return function (...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {

            cb.call(this, ...args)
            
        }, delay)
    }

}