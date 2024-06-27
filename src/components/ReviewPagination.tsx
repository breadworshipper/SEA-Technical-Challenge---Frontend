import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ReviewPagination({
  pageData,
  setPage,
}: {
  pageData: any
  setPage: (page: number) => void
}) {
  console.log(pageData)
  return (
    <Pagination className="mt-4 mx-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={pageData.page.current === 1}
            tabIndex={pageData.page.current <= 1 ? -1 : undefined}
            className={
              pageData.page.current <= 1
                ? "pointer-events-none opacity-50"
                : undefined
            }
            onClick={() => setPage(pageData.page.current - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            aria-disabled={pageData.page.current === pageData.page.total_pages}
            tabIndex={
              pageData.page.current >= pageData.page.total_pages
                ? -1
                : undefined
            }
            className={
              pageData.page.current >= pageData.page.total_pages
                ? "pointer-events-none opacity-50"
                : undefined
            }
            onClick={() => setPage(pageData.page.current + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
