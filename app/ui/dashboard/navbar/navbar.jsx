"use client";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
 
  if (
    pathname.includes("/buy") ||
    pathname.includes("/sell") ||
    pathname.includes("/chart") ||
    pathname.includes("/category")||
    pathname.includes("/stock") ||
    pathname.includes("/products")||
    pathname.includes("/users")
  ) {
    return null; // Não renderiza nada
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}></div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
