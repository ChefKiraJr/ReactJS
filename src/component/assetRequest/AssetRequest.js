import React, { Fragment, useState } from 'react';
import './assetRequest.css';
import { BoxIcon, MenuIcon, TotalPriceIcon } from './icon';
import { Button, Select, Input, Stack, Menu, MenuButton, MenuList, MenuItem, IconButton, Radio, RadioGroup } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Row, Col } from 'reactstrap';
import { cloneDeep } from 'lodash';

const AssetRequest = () => {
  const [input, setInput] = useState([
    {
      isProject: '',
      itemName: '',
      type: '',
      assetCategory: '',
      functionality: '',
      subItem: '',
      specification: '',
      itemPrice: '',
      quantity: '',
      ppnTaxes: '',
      pphTaxes: '',
      subItemDetail: [
        {
          subName: '',
          subSpecification: '',
          subItemPrice: '',
          subQuantity: '',
          subPpnTaxes: '',
          subPphTaxes: '',
        },
      ],
    },
  ]);
  const handleAdd = () => {
    let temp = [...input];
    let keyObj = Object.keys(input[0]);
    let tempObj = {};
    keyObj.forEach((key) => {
      if (key === 'subItemDetail') {
        tempObj[key] = [
          {
            subName: '',
          },
        ];
      } else {
        tempObj[key] = '';
      }
    });
    temp.push(tempObj);
    setInput(temp);
  };
  const handleDelete = (i) => {
    if (input.length > 1) {
      let arr = [];
      input.forEach((data, index) => {
        if (i !== index) {
          arr.push(data);
        }
      });
      setInput(arr);
    }
  };
  const handleChange = (e, i) => {
    let tempArr = [...input];
    tempArr[i][e.target.name] = e.target.value;
    setInput(tempArr);
    console.log(input);
  };
  const handleSubAdd = (i) => {
    let temp = [...input];
    let keyObj = Object.keys(input[0].subItemDetail);
    let tempObj = {};
    keyObj.forEach((key) => (tempObj[key] = ''));
    temp[i].subItemDetail.push(tempObj);
    setInput(temp);
  };
  const handleSubDelete = (i, indexSubItem) => {
    let temp = [...input];
    if (temp[i].subItemDetail.length > 1) {
      let arr = [];
      temp[i].subItemDetail.forEach((data, index) => {
        if (indexSubItem !== index) {
          arr.push(data);
        }
      });
      temp[i].subItemDetail = arr;
      setInput(temp);
    }
  };
  const handleSubChange = (e, i, indexSubItem) => {
    let temp = [...input];
    temp[i].subItemDetail[indexSubItem][e.target.name] = e.target.value;
    setInput(temp);
  };
  return (
    <>
      <div className="asset-request__container">
        {input.map((data, i) => {
          return (
            <div className="asset-request__item">
              <Fragment key={i}>
                <div className="asset-request__title">
                  <p>Item #{i + 1}</p>
                  <Menu>
                    <MenuButton as={IconButton} aria-label="Options" icon={<MenuIcon />} bg="white" borderWidth="0" />
                    <MenuList>
                      <MenuItem icon={<AddIcon />} onClick={handleAdd}>
                        Add
                      </MenuItem>
                      <MenuItem icon={<DeleteIcon />} onClick={() => handleDelete(i)}>
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div className="asset-request__project">
                  <p>Is this item part of project?</p>
                  <RadioGroup value={data.isProject} name="isProject">
                    <Stack direction="row">
                      <Radio value="Yes" onChange={(event) => handleChange(event, i)}>
                        Yes
                      </Radio>
                      <Radio value="No" onChange={(event) => handleChange(event, i)}>
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
                <div className="asset-request__content">
                  <Row>
                    <Col lg="6">
                      <p className="asset-request-content__title">Item</p>
                      <Input value={data.itemName} type="email" name="itemName" className="asset-request-content__input" placeholder="Type item name" onChange={(event) => handleChange(event, i)} />
                    </Col>
                    <Col lg="6">
                      <p className="asset-request-content__title">Type</p>
                      <Select placeholder={<div className="select-placeholder-text">Choose an option</div>} name="type" value={data.type} onChange={(event) => handleChange(event, i)}>
                        <option value="Jasa">Jasa</option>
                        <option value="Non-jasa">Non-Jasa</option>
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <p className="asset-request-content__title">Asset category</p>
                      <Select placeholder="Choose an option" name="assetCategory" value={data.assetCategory} onChange={(event) => handleChange(event, i)}>
                        <option value="Category A">Category A</option>
                        <option value="Category B">Category B</option>
                        <option value="Category C">Category C</option>
                      </Select>
                    </Col>
                    <Col lg="6">
                      <p className="asset-request-content__title">
                        Fucntionality <span className="asset-request-content__desc">required for machinery and factory</span>
                      </p>
                      <Select placeholder="Choose an option" name="functionality" value={data.functionality} onChange={(event) => handleChange(event, i)}>
                        <option value="Machinery">Machinery</option>
                        <option value="option2">Factory</option>
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <p className="asset-request-content__title">Item with sub-item</p>
                      <Select placeholder="Choose an option" name="subItem" value={data.subItem} onChange={(event) => handleChange(event, i)}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Select>
                    </Col>
                  </Row>
                  {data.subItem === 'Yes' ? (
                    <div className="sub-item">
                      <div className="sub-item__header">
                        <p>--- Sub-item ---</p>
                      </div>
                      {data.subItemDetail.map((subData, index) => {
                        return (
                          <Fragment key={index}>
                            <div className="sub-item__title">
                              <div className="sub-item-title__text">
                                <BoxIcon />
                                <p>Sub-item {index + 1}</p>
                              </div>
                              <DeleteIcon className="delete-icon" color="#CA3636" w="7" h="6" onClick={() => handleSubDelete(i, index)} />
                            </div>
                            <div className="sub-item__content">
                              <Row>
                                <Col lg="6">
                                  <p className="asset-request-content__title">Sub-item</p>
                                  <Input className="asset-request-content__input" placeholder="Type sub-item name" name="subName" value={subData.subName} onChange={(event) => handleSubChange(event, i, index)} />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <p className="asset-request-content__title">Specification</p>
                                  <Input className="asset-request-content__input" placeholder="Type item specification" name="subSpecification" value={subData.subSpecification} onChange={(event) => handleSubChange(event, i, index)} />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <p className="asset-request-content__title">
                                    Item price <span className="asset-request-content__desc">(IDR)</span>
                                  </p>
                                  <Input className="asset-request-content__input" placeholder="Type item price" name="subItemPrice" value={subData.subItemPrice} onChange={(event) => handleSubChange(event, i, index)} />
                                </Col>
                                <Col lg="6">
                                  <p className="asset-request-content__title">Quantity</p>
                                  <Input className="asset-request-content__input" placeholder="Type quantity of the item" name="subQuantity" value={subData.subQuantity} onChange={(event) => handleSubChange(event, i, index)} />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <p className="asset-request-content__title">PPN taxes</p>
                                  <Select placeholder="Choose an option" name="subPpnTaxes" value={subData.subPpnTaxes} onChange={(event) => handleSubChange(event, i, index)}>
                                    <option value="PPN tax">PPN tax</option>
                                    <option value=">PPN no-tax">PPN no-tax</option>
                                  </Select>
                                </Col>
                                <Col lg="6">
                                  <p className="asset-request-content__title">PPH taxes</p>
                                  <Select placeholder="Choose an option" name="subPphTaxes" value={subData.subPphTaxes} onChange={(event) => handleSubChange(event, i, index)}>
                                    <option value="PPH tax">PPH tax</option>
                                    <option value="PPH no-tax">PPH no-tax</option>
                                  </Select>
                                </Col>
                              </Row>
                            </div>
                          </Fragment>
                        );
                      })}
                      <Button leftIcon={<SmallAddIcon w="4" h="4" color="white" bg="#1175D9" borderRadius="100%" />} colorScheme="white" borderWidth="0" color="#1175D9" className="sub-item__button" size="sm" onClick={() => handleSubAdd(i)}>
                        Add sub-item
                      </Button>
                      <div className="total-price">
                        <TotalPriceIcon className="total-price__icon" />
                        <p>
                          Total price <span>1,000,000</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Row>
                        <Col lg="12">
                          <p className="asset-request-content__title">Specification</p>
                          <Input className="asset-request-content__input" placeholder="Type item specification" name="specification" value={data.specification} onChange={(event) => handleChange(event, i)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <p className="asset-request-content__title">
                            Item price <span className="asset-request-content__desc">(IDR)</span>
                          </p>
                          <Input className="asset-request-content__input" placeholder="Type item price" name="itemPrice" value={data.itemPrice} onChange={(event) => handleChange(event, i)} />
                        </Col>
                        <Col lg="6">
                          <p className="asset-request-content__title">Quantity</p>
                          <Input className="asset-request-content__input" placeholder="Type quantity of the item" name="quantity" value={data.quantity} onChange={(event) => handleChange(event, i)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <p className="asset-request-content__title">PPN taxes</p>
                          <Select placeholder="Choose an option" name="ppnTaxes" value={data.ppnTaxes} onChange={(event) => handleChange(event, i)}>
                            <option value="PPN tax">PPN tax</option>
                            <option value=">PPN no-tax">PPN no-tax</option>
                          </Select>
                        </Col>
                        <Col lg="6">
                          <p className="asset-request-content__title">PPH taxes</p>
                          <Select placeholder="Choose an option" name="pphTaxes" value={data.pphTaxes} onChange={(event) => handleChange(event, i)}>
                            <option value="PPH tax">PPH tax</option>
                            <option value="PPH no-tax">PPH no-tax</option>
                          </Select>
                        </Col>
                      </Row>
                    </>
                  )}
                </div>
              </Fragment>
            </div>
          );
        })}
        <Button leftIcon={<AddIcon />} colorScheme="blue" variant="outline" onClick={handleAdd}>
          Add new item
        </Button>
      </div>
    </>
  );
};

export default AssetRequest;
