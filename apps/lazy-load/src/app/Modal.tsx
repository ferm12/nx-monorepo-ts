// interface Props{
//     onClose: () => void;
// }
// export default function Modal(props: Props) {
//     return (
//         <div className="modal" onClick={props.onClose}>
//             <h2>Modal Title</h2>
//             <p>This is the modal content.</p>
//             <button onClick={props.onClose}>Close</button>
//         </div>
//     );
// }

export default function Modal(){
    return (
        <div>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button>Close</button>
        </div>
    );
}

