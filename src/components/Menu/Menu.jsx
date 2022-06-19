import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink
        to={'/monday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Monday
      </NavLink>
      <NavLink
        to={'/tuesday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Tuesday
      </NavLink>
      <NavLink
        to={'/wednesday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Wednesday
      </NavLink>
      <NavLink
        to={'/thursday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Thursday
      </NavLink>
      <NavLink
        to={'/friday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Friday
      </NavLink>
      <NavLink
        to={'/saturday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Saturday
      </NavLink>
      <NavLink
        to={'/sunday'}
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        Sunday
      </NavLink>
    </div>
  );
};

export default Menu;
