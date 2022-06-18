import Button from '../Button/Button'
import classes from './Modal.module.scss'

interface PropsTypes {
    text: string,
    closeModal: Function
}

const Modal = (props: PropsTypes) => {
    const CloseModal = () => {
        props.closeModal()
    }

    return(
        <>
            <div className={classes.modal}>
                <h1>{props.text}</h1>
                <Button icon='' text='close' onClick={CloseModal}/>
            </div>
            <div className={classes.backdrop}></div>
        </>

    )
}

export default Modal