"use client"

import useBranch from "@/hooks/useBranch"
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "./ui/table"

export default function BranchTable() {
  const { data, loading, error } = useBranch()

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Branch Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Open Time</TableHead>
              <TableHead>Close Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length === 0 ? (
              <div>No branches found.</div>
            ) : (
              data?.map((branch: any, index: number) => (
                <TableRow key={branch.id}>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.address}</TableCell>
                  <TableCell>{branch.open_time}</TableCell>
                  <TableCell>{branch.close_time}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </>
  )
}
