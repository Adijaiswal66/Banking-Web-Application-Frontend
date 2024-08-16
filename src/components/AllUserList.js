import React from "react";

function AllUserList({ userList }) {
  let count = 0;

  return (
    <>
      {userList.map((users) => {
        const {
          userId,
          firstName,
          lastName,
          userEmail,
          phoneNumber,
          address,
          accountNumber,
          availableBalance
        } = users;
        count += 1;

        return (
          <tr key={userId}>
            <th className="text-center" scope="row">
              {count}
            </th>
            <td className="text-center">{firstName}</td>
            <td className="text-center">{lastName}</td>
            <td className="text-center">{userEmail}</td>
            <td className="text-center">{phoneNumber}</td>
            <td className="text-center">{address}</td>
            <td className="text-center">{accountNumber}</td>
            <td className="text-center">{availableBalance}</td>
          </tr>
        );
      })}
    </>
  );
}

export default AllUserList;
