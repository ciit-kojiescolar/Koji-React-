import './Modal.css'

export default function ModalDemo(props) {
  return (
    <div className="modal-backdrop">      
      <div className="modal">
      <h2>{props.title}</h2>
        {props.children}
        <button>Close</button>
        {props.car}
      </div>
    </div>
  )
}