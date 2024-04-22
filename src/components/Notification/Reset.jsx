import css from "./Reset.module.css"
const Resetbutton = ({ reset }) => {
    return (
        <div className={css["reset-wrapper"]}>
            <span className={css["reset-span"]}>You can reset contacts to default</span>
            <button className={css["reset-button"]} onClick={reset}>Reset contacts</button>
        </div>
    )
}
export default Resetbutton;