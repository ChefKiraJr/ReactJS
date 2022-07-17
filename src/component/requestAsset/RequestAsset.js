import React from 'react';
import './requestAsset.css';
import { DocIcon } from './Icon';
import { Badge, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { dataDummy, dataDummyItem } from './const';

const RequestAsset = () => {
  console.log(dataDummy);
  return (
    <>
      <div className="request-asset__container">
        <div className="request-asset__header">
          <DocIcon />
          <div className="request-asset-header__text">
            <p className="request-asset-header__first">Request title</p>
            <p className="request-asset-header__last">Request Assets No.1</p>
          </div>
        </div>
        <div className="request-asset__content">
          {dataDummy.map((data, i) => {
            return (
              <div className="request-asset-content__row">
                <p className="request-asset-content__row-title">{data.title}</p>
                <p className="request-asset-content__row-description">{data.description}</p>
              </div>
            );
          })}
        </div>
        <div className="request-asset__details">
          <h4>Item details</h4>
          {dataDummyItem.map((data, i) => {
            return (
              <Accordion allowToggle>
                <AccordionItem>
                  <div className="accordion-button">
                    <AccordionButton _expanded={{ bg: '#ECF5FE' }}>
                      <div className="accordion-button-text">
                        <Badge className={data.projectType === 'Project' ? 'project-badge' : 'non-project-badge'}>{data.projectType}</Badge>
                        <p className="accordion-button-text-main">Item title {data.itemName}</p>
                      </div>
                      <AccordionIcon w={40} h={40} color={'#1175D9'} />
                    </AccordionButton>
                  </div>
                  <AccordionPanel pb={4}>
                    <div className="item-details__row">
                      <div className="item-details__type">
                        <p className="item-details__title">Type</p>
                        <p className="item-details__description">{data.type}</p>
                      </div>
                      <div className="item-details__category">
                        <p className="item-details__title">Asset categoty</p>
                        <p className="item-details__description">{data.assetCategory}</p>
                      </div>
                    </div>
                    <div className="item-details__row">
                      <div className="item-details__function">
                        <p className="item-details__title">Functionality</p>
                        <p className="item-details__description">{data.functionality}</p>
                      </div>
                    </div>
                    <div className="item-details__spec">
                      <p className="item-details__title">Specification</p>
                      <ul className="item-details__list">
                        {data.specification.map((value, i) => {
                          return <li>{value}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="item-details__row">
                      <div className="item-details__price">
                        <p className="item-details__title">Item price (IDR)</p>
                        <p className="item-details__description">{data.itemPrice}</p>
                      </div>
                      <div className="item-details__qty">
                        <p className="item-details__title">Quantity</p>
                        <p className="item-details__description">{data.quantity}</p>
                      </div>
                    </div>
                    <div className="item-details__row">
                      <div className="item-details__ppn">
                        <p className="item-details__title">PPN Taxes</p>
                        <p className="item-details__description">{data.ppnTaxes}</p>
                      </div>
                      <div className="item-details__pph">
                        <p className="item-details__title">PPH Taxes</p>
                        <p className="item-details__description">{data.pphTaxes}</p>
                      </div>
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RequestAsset;
