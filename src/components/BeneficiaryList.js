import React from "react";

const BeneficiaryList = ({ beneficiary }) => {
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

        return (
          <tr key={beneficiaryId}>
            <th scope="row">{beneficiaryId}</th>
            <td className="text-center">{firstName}</td>
            <td className="text-center">{lastName}</td>
            <td className="text-center">{accountNumber}</td>
            <td className="text-center">{bankName}</td>
            <td className="text-center">{maxTransferLimit}</td>
          </tr>
        );
      })}

      {/* <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{beneficiary}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody> */}
    </>
  );
};

export default BeneficiaryList;
