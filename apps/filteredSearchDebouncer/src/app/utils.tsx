const debouncer = (cb, delay) => {

    let timerId;

    return function(...args) {

        clearTimeout(timerId);
    
        timerId = setTimeout(() => {

            cb.call(this, ...args)
        
        }, delay)

    
    }

}

export default debouncer;
