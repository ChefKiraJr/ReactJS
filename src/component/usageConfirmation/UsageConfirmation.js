import React from 'react';
import './usageConfirmation.css';
import { dataDummy } from './const';
import { Row, Col } from 'reactstrap';
import { DocIcon, OtherDocIcon } from './icon';
import OtherDocument from './OtherDocument';

const UsageConfirmation = () => {
  return (
    <>
      <div className="usage-confirmation__container">
        <div className="usage-confirmation__content">
          <Row>
            <Col lg="8">
              <div className="usage-confirmation__main">
                <div className="usage-confirmation__header">
                  <DocIcon />
                  <div className="usage-confirmation-header__text">
                    <p className="usage-confirmation-header__first">Item name</p>
                    <p className="usage-confirmation-header__last">{dataDummy.itemName}</p>
                  </div>
                </div>
                <div className="usage-confirmation__description">
                  <div className="usage-confirmation__row">
                    <div className="usage-confirmation__type">
                      <p className="usage-confirmation-content__title">Type</p>
                      <p className="usage-confirmation-content__description">{dataDummy.type}</p>
                    </div>
                    <div className="usage-confirmation__asset-category">
                      <p className="usage-confirmation-content__title">Asset category</p>
                      <p className="usage-confirmation-content__description">{dataDummy.assetCategory}</p>
                    </div>
                  </div>
                  <div className="usage-confirmation__row">
                    <div className="usage-confirmation__specification">
                      <p className="usage-confirmation-content__title">Specification</p>
                      <p className="usage-confirmation-content__description">{dataDummy.specification}</p>
                    </div>
                    <div className="usage-confirmation__location">
                      <p className="usage-confirmation-content__title">Location</p>
                      <p className="usage-confirmation-content__description">{dataDummy.location}</p>
                    </div>
                  </div>
                  <div className="usage-confirmation__detail-location">
                    <p className="usage-confirmation-content__title">Detail location</p>
                    <p className="usage-confirmation-detail-location__description">{dataDummy.detailLocation}</p>
                  </div>
                </div>
              </div>
              <div className="submit-button">
                <button className="approve-button">Approve and generate code</button>
                <button className="reject-button">Reject and give note</button>
              </div>
            </Col>
            <Col lg="4">
              <div className="requested-items">
                <p className="requested-items__title">Requested items</p>
                <p className="requested-items__description">
                  <span className="requested-items__amount-receive">{dataDummy.amountReceive}</span>
                  <span className="requested-items__amount-requested">of {dataDummy.amountRequest} available items</span>
                </p>
              </div>
              <OtherDocument dataDummy={dataDummy} />
            </Col>
          </Row>
        </div>
        <div className="usage-confirmation__history">
          <div className="usage-confirmation-history__content">
            <div className="usage-confirmation-history__title">
              <p>Claim usage history</p>
            </div>
            <div className="usage-confirmation-history__description">
              {dataDummy.history.map((value, i) => {
                return (
                  <div>
                    <p className="history-description__title">{value.date}</p>
                    <p className="history-description__content">
                      {value.username} {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsageConfirmation;
