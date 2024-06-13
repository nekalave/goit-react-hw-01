import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem}
               to='/goit-react-hw-01/'>
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/profile'>
        Profile
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/statistic1'>
        Statistics-1
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/statistic2'>
        Statistics-2
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem} to='/friendlist'>
        FriendList
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? `${css.navItem} ${css.active}` : css.navItem}
               to='/transactionhistory'>
        TransactionHistory
      </NavLink>
    </nav>
  );
};
