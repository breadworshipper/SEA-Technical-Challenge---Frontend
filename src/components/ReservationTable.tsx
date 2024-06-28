import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ReservationTable({ data, loading, error }: any) {
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Nomor Telepon</TableHead>
              <TableHead>Jenis Layanan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Waktu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.length === 0 ? (
              <div>No reservations found.</div>
            ) : (
              data?.map((reservation: any, index: number) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.phone_number}</TableCell>
                  <TableCell>{reservation.type_of_service}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </>
  )
}
