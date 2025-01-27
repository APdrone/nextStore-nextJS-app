import { Skeleton } from "../ui/skeleton"

export default function Loadingtable({ rows = 5 }: { rows?: number }) {
    const tableRows = Array.from({ length: rows }, (_, index) => {
        return <div className="mb-4" key={index}>
            <Skeleton className="w-full h-8 round" />
        </div>
    })
    return (
        <>
            {tableRows}
        </>
    )
}
