import React from "react";
import { ListGroupItem } from "reactstrap";

export default function SingleTransaction({
  accountNumber,
  address,
  name,
  reference,
  amount,
  _id,
  date
}) {
  return (
    <div>
      <ListGroupItem key={_id}>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <h6 className="mr-4">
            <strong>Payee:</strong> {name}
          </h6>
          <h6 className="mr-4">
            <strong>Address:</strong> {address}
          </h6>
          <h6 className="mr-4">
            <strong>Account Number:</strong> {accountNumber}
          </h6>
          <h6>
            <strong>Reference:</strong> {reference}
          </h6>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <h6 className="mr-4">
            <strong>Amount:</strong> {amount}
          </h6>
          <h6>
            <strong>Date:</strong> {date}
          </h6>
        </div>
      </ListGroupItem>
    </div>
  );
}
