import "./Header.modules.css";
import iconRocket from "../assets/icon-rocket.svg";

export function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={iconRocket} alt="icon-rocket" />
        <h1 className="header__title">todo</h1>
      </div>
    </header>
  )
}
