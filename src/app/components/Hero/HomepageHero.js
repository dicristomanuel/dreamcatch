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
    // console.log('styles >>', styles);
    return (
      <div className={styles['hero-container']}>
        something in here // find out why no style
      </div>
    );
  }
}
