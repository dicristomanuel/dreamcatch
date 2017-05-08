// import { connect } from 'react-redux';
// import DocumentMeta from 'react-helmet';
// import * as homeActions from 'app/actions/home.actions';
// import { get } from 'app/utils';
import styles from './HomepageHero.module.scss';

// @connect(state => ({
//   home: get('home.data')(state),
// }), homeActions)
export default class HomepageHero extends React.Component {
  static defaultProps = {
    home: [ 'stuff' ],
  };

  state = {
    returned: undefined,
  }

  componentDidMount() {
    // this.props.apiFetch();
  }

  render() {
    return (
      <div className={styles['main-hero']}>

        <div className={styles.rewards}>
          <div className={styles['game-icon']} />
          <div className={styles['game-amount']} />
          <div className={styles['game-button']} />
        </div>

        <div className={styles['games-container']}>
          <div className={styles['always-win']} />
          <div className={styles['classic-lotto']} />
          <div className={styles['slot']} />
        </div>

      </div>
    );
  }
}
