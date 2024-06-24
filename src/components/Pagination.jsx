import { Pagination } from "flowbite-react";

export default function PaginationCp({
  currentPage,
  onPageChange,
  totalPages,
  scrollToTop,
}) {
  return (
    <>
      <div className="flex  justify-center">
        <Pagination
          onClick={scrollToTop}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
