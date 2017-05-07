import { NavLink } from 'react-router-dom';
import styles from './HeadNavigation.module.scss';

// Putting this inside a connect will break activeClassName
// unless you also subscribe to changes to routing state or context
export default class HeadNavigation extends React.Component {
  render() {
    const { ...props } = this.props;
    return (
      <nav className={styles.nav} {...props}>
        <div className={styles.logo}></div>
        <NavLink exact activeClassName={styles.active} to='/'>
          WINNING
        </NavLink>
        <NavLink exact activeClassName={styles.active} to='/something'>
          HOW IT WORKS
        </NavLink>
        <NavLink exact activeClassName={styles.active} to='/else'>
          GIVING BACK
        </NavLink>
        <NavLink exact activeClassName={styles.active} to='/route'>
          MY ACCOUNT
        </NavLink>
        {/*<NavLink activeClassName={styles.active} to='/private'>
          Private
        </NavLink>*/}
      </nav>
    );
  }
}
