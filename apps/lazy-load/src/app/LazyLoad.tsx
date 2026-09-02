// import { useState, lazy, Suspense} from 'react';

// const Modal = lazy(() => delayForDemo( import('./Modal')));

// export default function LazyLoad() {
//     const [showModal, setShowModal] = useState(false);

//     const openModal = () => {
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };  

//     return (
//         <div>
//             <button
//                 onClick={openModal}
//             >
//                 open Modal
//             </button>
//             <Suspense 
//                 fallback={<div>Loading...</div>}
//             >
//                 {showModal && <Modal onClose={closeModal} />}
//             </Suspense>
//         </div>
//     );
// }

// function delayForDemo(promise){
//     return new Promise((resolve) => {
//         setTimeout(resolve,  2000);   
//     }).then(() => promise);
// }

import {lazy, Suspense} from 'react';

const Modal = lazy(() => import('./Modal'))

export default function LazyLoad(){
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Modal />
            </Suspense> 
        </div>
    )
}