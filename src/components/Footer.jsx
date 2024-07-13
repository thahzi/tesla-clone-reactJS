import React from "react";
import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Row
        className="p-5  text-center"
        style={{ backgroundColor: "black", color: "white", fontSize: "10px" }}
      >
        <Col sm={12} md={4}></Col>

        <Col sm={12} md={4}>
          <p>
            <sup>1</sup> $7,500 Federal Tax Credit available for eligible buyers
            and subject to MSRP caps. Model 3 Rear-Wheel Drive not eligible.
          </p>
          <p>
            <sup>2</sup> Price before estimated savings is $42,490, excluding
            taxes and fees. Subject to change. Estimated savings includes $5,000
            in <span style={{ textDecoration: "underline" }}>gas savings</span>{" "}
            estimated over five years, the $7,500 Federal Tax Credit and state
            incentives, available to eligible buyers and subject to MSRP caps.{" "}
            <span style={{ textDecoration: "underline" }}>Terms apply.</span>
          </p>
          <p>
            <sup>3</sup> Price before estimated savings is $44,990, excluding
            taxes and fees. Subject to change. Estimated savings includes $6,000
            in <span style={{ textDecoration: "underline" }}>gas savings</span>{" "}
            estimated over five years, the $7,500 Federal Tax Credit and state
            incentives, available to eligible buyers and subject to MSRP caps.{" "}
            <span style={{ textDecoration: "underline" }}>Terms apply.</span>
          </p>
          <p>
            <sup>4</sup> Price before estimated savings is $77,990, excluding
            taxes and fees. Subject to change. Estimated savings includes $6,500
            in <span style={{ textDecoration: "underline" }}>gas savings</span>{" "}
            estimated over five years, the $7,500 Federal Tax Credit and state
            incentives, available to eligible buyers and subject to MSRP caps.{" "}
            <span style={{ textDecoration: "underline" }}>Terms apply.</span>
          </p>
          <p>
            <sup>5</sup> Price before estimated savings is $72,990, excluding
            taxes and fees. Subject to change. Estimated savings includes $6,500
            in <span style={{ textDecoration: "underline" }}>gas savings</span>{" "}
            estimated over five years and state incentives, available to
            eligible buyers and subject to MSRP caps.{" "}
            <span style={{ textDecoration: "underline" }}>Terms apply.</span>
          </p>
        </Col>

        <Col sm={12} md={4}></Col>
      </Row>
    </>
  );
}

export default Footer;
