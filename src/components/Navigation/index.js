import React from "react";
import './Nav.css';

function Nav({ categories, setCurrentCategory, currentCategory }) {
    return (
        <header>
          <h2 className="m-3 p-3 mt-6">WB</h2>
          <nav className="m-3">
            <ul>
                {categories.map((category, id) => (
                    <li
                        key={id}
                        onClick={() => {
                            setCurrentCategory(category.name);
                        }}
                    >{category.name}
                    </li>
                ))}
            </ul>
          </nav>
        </header>
    )
}

export default Nav;