import React from 'react';
import ReactPaginate from 'react-paginate';
import {addHistoryParams} from '../../helpers/utils';

class Pagination extends React.Component {
    handlePageClick = data => {
        addHistoryParams(
            this.props.data.props.history,
            {page: data.selected + 1}
        );
    };

    render() {
        return (
            <ReactPaginate
                pageCount={this.props.data.pageCount}
                initialPage={this.props.data.initialPage - 1}

                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}

                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}

                breakClassName={'break'}
                breakLinkClassName={''}
                containerClassName={'pagination'}
                pageClassName={''}
                pageLinkClassName={''}
                activeClassName={'active'}
                activeLinkClassName={''}
                nextClassName={''}
                nextLinkClassName={''}
                previousClassName={''}
                previousLinkClassName={''}
                disabledClassName={''}
            />
        );
    }
}

export default Pagination;