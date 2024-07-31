import React from "react";

const BeneficiaryList = ({ beneficiary }) => {

  let count = 0;

  return (
    <>
      {beneficiary.map((benef) => {
        const {
          beneficiaryId,
          firstName,
          lastName,
          accountNumber,
          bankName,
          maxTransferLimit,
        } = benef;
        count += 1;
        
        return (
          <tr key={beneficiaryId}>
            <th className="text-center" scope="row">
              {count}
            </th>
            <td className="text-center">{firstName}</td>
            <td className="text-center">{lastName}</td>
            <td className="text-center">{accountNumber}</td>
            <td className="text-center">{bankName}</td>
            <td className="text-center">{maxTransferLimit}</td>
          </tr>
        );
      })}
    </>
  );
};

export default BeneficiaryList;
