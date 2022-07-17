import React from 'react';

const Dummy = () => {
  return <></>;
};

export const dataDummy = [
  { title: 'Vendor name', description: 'Quam enim dolor tellus sit nec' },
  { title: 'TOP', description: 'Quam enim dolor tellus sit nec' },
  { title: 'Company entity', description: 'Paragon' },
  { title: 'Department budget', description: '1,000,000' },
  { title: 'Project name', description: 'Quam enim dolor tellus sit nec' },
  { title: 'Superior', description: 'Nurdina Hidayati' },
  { title: 'Currency', description: 'IDR' },
];

export const dataDummyItem = [
  {
    projectType: 'Project',
    itemName: '#1',
    type: 'Quam enim dolor tellus sit nec',
    assetCategory: 'Quam enim dolor',
    functionality: 'Quam enim',
    specification: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Enim suscipit iaculis ultrices diam felis', 'Morbi sed mauris ultricies integer ullamcorper sit, odio aenean libero volupat, ipsum magna pretium ac.'],
    itemPrice: '500,000',
    quantity: 2,
    ppnTaxes: 'Quam enim dolor tellus sit nec',
    pphTaxes: 'Quam enim dolor tellus sit nec',
  },
  {
    projectType: 'Project',
    itemName: '#2',
    type: 'Quam enim dolor tellus sit nec',
    assetCategory: 'Quam enim dolor',
    functionality: 'Quam enim',
    specification: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    itemPrice: '750,000',
    quantity: 5,
    ppnTaxes: 'Quam enim dolor tellus sit nec',
    pphTaxes: 'Quam enim dolor tellus sit nec',
  },
  {
    projectType: 'Non-project',
    itemName: '#3',
    type: 'Quam enim dolor tellus sit nec',
    assetCategory: 'Quam enim dolor',
    functionality: 'Quam enim',
    specification: ['Enim suscipit iaculis ultrices diam felis', 'Morbi sed mauris ultricies integer ullamcorper sit, odio aenean libero volupat, ipsum magna pretium ac.'],
    itemPrice: '200,000',
    quantity: 4,
    ppnTaxes: 'Quam enim dolor tellus sit nec',
    pphTaxes: 'Quam enim dolor tellus sit nec',
  },
];

export default Dummy;
