import css from "./Deskription.module.css"
const Deskription = ()=> {
    return(
        <div className={css.deskriptionContainer}>
            <div className={css.deskriptionContent}>
                <h1 className={css.deskriptionTitle}>Sip Happens Café</h1>
                <p className={css.deskriptionText}>Please leave your feedback about our service by selecting one of the options below.</p>
            </div>
        </div>
    )
}
export default Deskription;