import Pagination from 'react-js-pagination';

const Paging = ({ activePage, itemsCountPerPage, totalItemsCount, onChangePage }) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={onChangePage}
      linkClass="page-link"
      innerClass="pagination justify-content-center"
      itemClass="page-item"
    />
  );
};

export default Paging;

