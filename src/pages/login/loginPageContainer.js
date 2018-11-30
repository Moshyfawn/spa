import { connect } from 'react-redux';
import LoginPage from './loginPage';

import { login, logout } from '../../store/actions/actions_user';

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error
    }
    
};

const mapDispatchToProps = {
    login, logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
