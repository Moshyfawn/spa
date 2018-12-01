import { connect } from 'react-redux';
import newsPage from './newsPage';

import { getNews } from '../../store/actions/actions_news';

const mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
        error: state.newsReducer.error,
        isLoading: state.newsReducer.isLoading
    }
    
};

const mapDispatchToProps = {
    getNews
};

export default connect(mapStateToProps, mapDispatchToProps)(newsPage)
