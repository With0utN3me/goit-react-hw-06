import Contact from "./Contact.jsx";
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDelete }) => {
    return(<ul className={css["contacts-list"]}>
        {contacts.map(contact => {
            return(
                <li className={css["list-item"]} key={contact.id}>
                    <Contact 
                    name = {contact.name}
                    number = {contact.number}
                    id = {contact.id}
                    onDelete = {onDelete}
                    />
                </li>
            )
        })}
    </ul>)
}
export default ContactList;