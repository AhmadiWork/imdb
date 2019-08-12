import React from 'react';
import Pagination from '../blocks/Pagination';
import {Helmet} from 'react-helmet';
import {getLocationParams, setPaginationData} from '../../helpers/utils';

class CommentList extends React.Component {
    render() {
        let commentNodes = this.props.data.map(function (comment, index) {
            return <div key={index}>{comment}</div>;
        });

        return (
            <div id="project-comments" className="commentList">
                <ul>{commentNodes}</ul>
            </div>
        );
    }
}

class Home extends React.Component {
    comments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
    commentsGetter = () => {
        let page = parseInt(getLocationParams(this.props.history).page);
        return this.comments.slice(
            (page - 1) * 10,
            page * 10
        )
    };

    render() {
        return (
            <React.Fragment>
                <Helmet><title>صفحه اصلی</title></Helmet>

                <CommentList data={this.commentsGetter()}/>
                <Pagination data={setPaginationData(this.comments.length, this.props)}/>
            </React.Fragment>
        );
    }
}

export default Home;