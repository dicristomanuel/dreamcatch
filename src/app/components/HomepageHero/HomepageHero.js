// import { connect } from 'react-redux';
// import DocumentMeta from 'react-helmet';
// import * as homeActions from 'app/actions/home.actions';
// import { get } from 'app/utils';
// import styles from './HomeRoute.module.scss';

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
      <div>
        something in here
      </div>
    );
  }
}
