// import Image from "next/image";
// import styles from "./globals.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className="test">
      <Link href="/dashboard/vote">戳我</Link>
    </div>
  );
}
