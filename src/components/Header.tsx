import './Header.module.css';
import TodoLogo from '../assets/todo-logo.svg'

export function Header() {
    return(
        <header>
            <img src={TodoLogo} alt="Logo do Todo List"/>
        </header>
    )
}