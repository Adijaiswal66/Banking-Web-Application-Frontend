import React from "react";

function AllTransactionsList({ transactionList }) {
  const tableColorChanger = (type) => {
    switch (type) {
      case "TRANSFER":
        return "table-success";
      case "WITHDRAW":
        return "table-danger";
      case "DEPOSIT":
        return "table-primary";
      case "BALANCE ENQUIRY":
        return "table-info";

      default:
        return "table-light";
    }
  };

  return (
    <>
      {transactionList.map((transactionList) => {
        const {
          transactionId,
          fromAccountNumber,
          toAccountNumber,
          transferredAmount,
          transactionDate,
          type,
        } = transactionList;

        return (
          <tr
            key={transactionId}
            className={tableColorChanger(transactionList.type)}
          >
            <th className="text-center" scope="row">
              {transactionId}
            </th>
            <td className="text-center">{fromAccountNumber}</td>

            <td className="text-center">
              {toAccountNumber ? toAccountNumber : "N/A"}
            </td>
            <td className="text-center">
              {transferredAmount ? transferredAmount : "N/A"}
            </td>
            <td className="text-center">{transactionDate}</td>
            <td className="text-center">{type}</td>
          </tr>
        );
      })}
    </>
  );
}

export default AllTransactionsList;
