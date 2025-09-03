import Link from "next/link"
export default function Navbar() {
    return (
        <div>
           <nav>
            <ul>
                <li>
                   <Link href="/">Dashboard</Link>
                </li>
                <li>
                    <Link href="/doctor">Doctor Search</Link>
                </li>
                <li>
                    <Link href="/medical-history">Medical History</Link>
                </li>
                <li>
                    <Link href="/prescriptions">Prescriptions</Link>
                </li>
                <li>
                    <Link href="/appointments">Appointments</Link>
                </li>
                <li>
                   <Link href="/reports">Reports</Link>
                </li>
            </ul>
           </nav>
        </div>
    )
}