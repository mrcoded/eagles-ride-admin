import { useGlobalContext } from "@/hooks/useGlobalContext";

function Pagination({ totalPages }: { totalPages: number }) {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <div className="p-2">
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: 2 }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded text-base font-normal ${
              currentPage === i + 1 ? "bg-primary text-white font-medium" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        {currentPage === 3 ? (
          <button
            onClick={() => setCurrentPage(3)}
            className={`px-3 py-1 border rounded text-base font-normal ${
              currentPage === 3 ? "bg-primary text-white font-medium" : ""
            }`}
          >
            {currentPage}
          </button>
        ) : (
          currentPage > 3 && (
            <>
              <button
                key="..."
                className="px-3 py-1 border rounded text-base font-normal"
              >
                ...
              </button>
              <button
                key={currentPage}
                onClick={() => setCurrentPage(currentPage)}
                className={`px-3 py-1 border rounded text-base font-normal ${
                  currentPage === currentPage
                    ? "bg-primary text-white font-medium"
                    : ""
                }`}
              >
                {currentPage}
              </button>
            </>
          )
        )}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
