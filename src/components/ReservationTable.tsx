import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useReservation from "@/hooks/useReservation"

export default function ReservationTable() {
    const { data, loading, error } = useReservation()
    return (
      <>
        {loading ? (
          <div>Loading...</div>
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
              {data.map((reservation: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.phone_number}</TableCell>
                  <TableCell>{reservation.type_of_service}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </>
    )
}
