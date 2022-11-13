import styles from './Header.module.css';
import todoListLogo from '../../assets/ToDoList.svg'

export function Header() {
    return (
        <div className={styles.header} >
            <img src={todoListLogo} alt="" />
        </div>
    )
}