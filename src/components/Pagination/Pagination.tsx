import ReactPaginate from "react-paginate";

import "./Pagination.css";

interface IPageClicked {
  selected: number;
}

interface IPaginationProps {
  itemsLength: number;
}

function handleClick(data: IPageClicked) {
  console.log(data.selected);
}

export const Pagination = (props: IPaginationProps) => {
  const totalPages = Math.ceil(props.itemsLength / 2);

  return (
    <>
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handleClick}
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        className="pagination-container"
        activeLinkClassName="active-link"
        pageLinkClassName="page-link"
        previousLinkClassName="previous-link"
        nextLinkClassName="next-link"
        nextClassName="next-list"
        breakLinkClassName="break-link"
      />
    </>
  );
};
