import React from 'react';
import { OtherDocIcon } from './icon';

const OtherDocument = ({ dataDummy }) => {
  return (
    <div className="other-documents">
      <div className="other-documents__title">
        <OtherDocIcon />
        <p>Other documents</p>
      </div>
      <div className="other-documents__content">
        <div className="other-documents__asset-image">
          <p className="other-documents-content__title">Asset image</p>
          <p className="other-documents-content__description">{dataDummy.assetImage}</p>
        </div>
        <div className="other-documents__asset-image">
          <p className="other-documents-content__title">Related document</p>
          <p className="other-documents-content__description">{dataDummy.relatedDocument}</p>
        </div>
        <div className="other-documents__asset-image">
          <p className="other-documents-content__title">Document from vendor</p>
          <p className="other-documents-content__description">{dataDummy.vendorDocument}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherDocument;
