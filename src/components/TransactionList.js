import React from "react";

function TransactionList({ transaction }) {
  const tableColorChanger = (type) => {
    switch (type) {
      case "TRANSFER":
        return "table-success";
      case "WITHDRAW":
        return "table-warning";
      case "DEPOSIT":
        return "table-primary";
      case "BALANCE":
        return "table-info";

      default:
        return "table-light";
    }
  };

  return (
    <>
      {transaction.map((transaction) => {
        const {
          transactionId,
          fromAccountNumber,
          toAccountNumber,
          transferredAmount,
          transactionDate,
          type,
        } = transaction;

        return (
          <tr
            key={transactionId}
            className={tableColorChanger(transaction.type)}
          >
            <th
              className="text-center"
              scope="row"
              style={{ backgroundColor: "cadetblue", borderRadius: "4px" }}
            >
              {transactionId}
            </th>
            <td className="text-center">{fromAccountNumber}</td>
            <td className="text-center">{toAccountNumber}</td>
            <td className="text-center">{transferredAmount}</td>
            <td className="text-center">{transactionDate}</td>
            <td className="text-center">{type}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TransactionList;
