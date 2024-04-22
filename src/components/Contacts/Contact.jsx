import css from "./Contact.module.css"
const Contact = ({ name, number, id, onDelete }) => {
    return(
        <div className={css["contact-wrapper"]}>
            <div className={css["contact-info"]}>
                <p className={css["contact-p"]}>&#128222;{name}</p>
                <p className={css["contact-p"]}>&#128100;{number}</p>
            </div>
            <button className={css["contact-button"]} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}
export default Contact;