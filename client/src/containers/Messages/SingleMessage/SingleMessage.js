import React from "react";
import PropTypes from "prop-types";
import { AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

export default function SingleMessage({ name, _id, email, select, message }) {
  return (
    <div>
      <AccordionItem key={_id} title={name}>
        <div className="card">
          <div className="card-body">
            <div className="email d-flex flex-row">
              <strong>Email: </strong>
              <p className="ml-5">{email}</p>
            </div>
            <div className="email d-flex flex-row">
              <strong>Subject: </strong>
              <p style={{ marginLeft: "2rem" }}>{select}</p>
            </div>
            <div className="email d-flex flex-row">
              <strong>Message: </strong>
              <p className="ml-4">{message}</p>
            </div>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}

SingleMessage.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
