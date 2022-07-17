import React from 'react';
import './usageConfirmation.css';
import { dataDummy } from './const';
import { Row, Col } from 'reactstrap';

const UsageConfirmation = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col lg="8">
            <div className="request-asset__header">
              {/* <DocIcon /> */}
              <div className="request-asset-header__text">
                <p className="request-asset-header__first">Request title</p>
                <p className="request-asset-header__last">Request Assets No.1</p>
              </div>
            </div>
            <div className="request-asset__content">
              <div className="request-asset-content__row">
                <p className="request-asset-content__row-title">HAMDIL</p>
                <p className="request-asset-content__row-description">Luar biasah</p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="request-asset__header">
              {/* <DocIcon /> */}
              <div className="request-asset-header__text">
                <p className="request-asset-header__first">Request title</p>
                <p className="request-asset-header__last">Request Assets No.1</p>
              </div>
            </div>
            <div className="request-asset__content">
              <div className="request-asset-content__row">
                <p className="request-asset-content__row-title">HAMDIL</p>
                <p className="request-asset-content__row-description">Luar biasah</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UsageConfirmation;
