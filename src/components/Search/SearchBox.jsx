import css from "./SearchBox.module.css"
const SearchBox = ({ value, onFilter }) => {
    return(
        <div>
            <p className={css["search-p"]}>Find contacts by name&#128270;</p>
            <input 
                className={css["search-input"]}
                type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    )
}
export default SearchBox;