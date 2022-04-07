import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './ChangePage.css';

const ChangePage = ({ pageNumber, setPageNumber, maxPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (!searchParams.get('page')) {
    setSearchParams({ page: 1 });
  }
  setPageNumber(parseInt(searchParams.get('page')));
  const pageContainer = new Array(5);
  for (let i = 0; i < 5; i++) {
    if (pageNumber === 1) pageContainer[i] = pageNumber + i;
    else if (pageNumber === 2) pageContainer[i] = pageNumber + i - 1;
    else if (pageNumber === 2) pageContainer[i] = pageNumber + i - 1;
    else if (pageNumber === maxPage) pageContainer[i] = pageNumber - 4 + i;
    else if (pageNumber === maxPage - 1)
      pageContainer[i] = pageNumber - 4 + i + 1;
    else pageContainer[i] = pageNumber + i - 2;
  }
  const renderedPageContainer = pageContainer.map(page => {
    if (page <= maxPage && page > 0) {
      if (page !== parseInt(pageNumber))
        return (
          <div
            className="page_button"
            onClick={() => {
              setSearchParams({ page });
            }}
          >
            {page}
          </div>
        );
      return <div className="page_button active">{page}</div>;
    }
    return '';
  });
  if (maxPage !== 1)
    return (
      <div className="change_page">
        {pageNumber === 1 ? (
          ''
        ) : (
          <div
            className="previous_page page_button"
            onClick={() => {
              setSearchParams({ page: pageNumber - 1 });
            }}
          >
            Previous Page
          </div>
        )}
        <div className="page_numb_container">{renderedPageContainer}</div>
        {pageNumber === maxPage ? (
          ''
        ) : (
          <div
            className="next_page page_button"
            onClick={() => {
              setSearchParams({ page: pageNumber + 1 });
            }}
          >
            Next Page
          </div>
        )}
      </div>
    );
  return '';
};

export default ChangePage;
