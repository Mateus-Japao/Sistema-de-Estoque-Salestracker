// import Link from "next/link";
// import { fetchTransactions } from "../../../lib/data";
// import Pagination from "../../ui/dashboard/pagination/pagination";
// import styles from "./transactions.module.css";
// import Image from "next/image";
// import { deleteTransactions } from "../../../lib/actions";

// const Transactions = async ({ searchParams }) => {
//   const q = searchParams?.q || "";
//   const page = searchParams?.page || 1;
//   const { transactions, count } = await fetchTransactions(q, page);
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Latest Transactions</h2>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Status</th>
//             <th>Date</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               {" "}
//               <td>
//                 <div className={styles.user}>
//                   <Image
//                     src="/noavatar.png"
//                     alt=""
//                     width={40}
//                     height={40}
//                     className={styles.userImage}
//                   />
//                   {transaction.title}
//                 </div>
//               </td>
//               <td>
//                 <span className={`${styles.status} ${styles.done}`}>
//                   {" "}
//                   {transaction.type}
//                 </span>
//               </td>
//               <td>date</td>
//               <td>R$ {transaction.price},00</td>
//               <td>
//                 <div className={styles.buttons}>
//                   {" "}
//                   <Link href={`/dashboard/transactions/${transaction.id}`}>
//                     <button className={` ${styles.button} ${styles.view}`}>
//                       Edit
//                     </button>
//                   </Link>
//                   <form action={deleteTransactions}>
//                     <input type="hidden" name="id" value={transaction.id} />
//                     <button className={` ${styles.button} ${styles.delete}`}>
//                       Delete
//                     </button>
//                   </form>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination count={count} />
//     </div>
//   );
// };
// export default Transactions;
