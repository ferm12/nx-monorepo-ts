import './overlay.css';
interface Props {
    beer: {
      id: number, 
      name: string, 
      description: string
    }
    onClose: () => void
    openOverlay: boolean
}

export default function Overlay(props: Props) {

  const { beer, onClose, openOverlay } = props;

  return (
    <div>
      {
        openOverlay &&
          <div className='overlay' onClick={() => onClose()}>
              {/* <div className='overlay-content' onClick={(e) => e.stopPropagation()}> */}
              <div className='overlay-content'>
                  <p>title: {beer?.name}</p>
                  <p>description: {beer?.description}</p>
                  <button onClick={() => onClose()}>Close</button>
              </div>
          </div>
      }
    </div>
  );
}