import React from 'react';
import './detailProduct.css';
import GambarProduk from '../../assets/image/gambarProduk.jpg';

const LineBreak = () => {
  return (
    <svg width="306" height="2" viewBox="0 0 306 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1L306 0.999973" stroke="#1A1A1A" stroke-width="2" />
    </svg>
  );
};

const DetailProduct = () => {
  return (
    <>
      <div className="detail-product__container">
        <img src={GambarProduk} alt="bottle" className="detail-product__image"></img>
        <div className="detail-product__content">
          <div className="detail-product__title">
            <h2>DETAIL</h2>
            <div className="detail-product__line">
              <LineBreak />
            </div>
          </div>
          <h4>Produk</h4>
          <div className="detail-product__description">
            <div className="detail-product__row">
              <p className="detail-product-row__first">Packaging primer</p>
              <p>24 x 59 mm</p>
            </div>
            <div className="detail-product__row">
              <p className="detail-product-row__first">Netto</p>
              <p>10 ml</p>
            </div>
            <div className="detail-product__row">
              <p className="detail-product-row__first">Packaging sekunder</p>
              <p>27 x 27 x 65 mm</p>
            </div>
            <div className="detail-product__row">
              <p className="detail-product-row__first">Bentuk produk</p>
              <p>Cair</p>
            </div>
            <div className="detail-product__row">
              <p className="detail-product-row__first">Daftar bahan</p>
              <p>Packaging primer 24 x 59 mm Netto 10 ml Packaging sekunder 27 x 27 x 65 mm Bentuk produk Cair Daftar Bahan Menthol, Menthone, and 1,8-Cineole, Menthyl acetate and Isovalerate, Pinene, Limonene and other constituents</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
