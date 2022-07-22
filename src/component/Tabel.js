import React from 'react';
import './tabel.css';

export const data = [
  {
    id: 1,
    first_name: 'Hermie',
    last_name: 'Wetherburn',
    email: 'hwetherburn0@i2i.jp',
    gender: 'Female',
    job_title: 'Help Desk Operator',
    company_name: 'Gleichner and Sons',
    department: 'Product Management',
    avatar: 'https://robohash.org/modilaboreillum.png?size=50x50&set=set1',
  },
  {
    id: 2,
    first_name: 'Ailsun',
    last_name: 'Kinvig',
    email: 'akinvig1@exblog.jp',
    gender: 'Male',
    job_title: 'Cost Accountant',
    company_name: 'Littel-Abbott',
    department: 'Services',
    avatar: 'https://robohash.org/utveritatisbeatae.png?size=50x50&set=set1',
  },
  {
    id: 3,
    first_name: 'Hannah',
    last_name: 'Tole',
    email: 'htole2@slashdot.org',
    gender: 'Female',
    job_title: 'Marketing Manager',
    company_name: 'Zieme and Sons',
    department: 'Marketing',
    avatar: 'https://robohash.org/accusamusquasqui.png?size=50x50&set=set1',
  },
  {
    id: 4,
    first_name: 'Hilliard',
    last_name: 'Ellam',
    email: 'hellam3@mapy.cz',
    gender: 'Male',
    job_title: 'Accountant II',
    company_name: 'Davis, Jakubowski and Olson',
    department: 'Training',
    avatar: 'https://robohash.org/earumcumquenon.png?size=50x50&set=set1',
  },
  {
    id: 5,
    first_name: 'Addia',
    last_name: 'Selbach',
    email: 'aselbach4@stumbleupon.com',
    gender: 'Male',
    job_title: 'Financial Analyst',
    company_name: 'Aufderhar-Labadie',
    department: 'Sales',
    avatar: 'https://robohash.org/nonrepellatex.png?size=50x50&set=set1',
  },
  {
    id: 6,
    first_name: 'Norry',
    last_name: 'Swedeland',
    email: 'nswedeland5@wiley.com',
    gender: 'Female',
    job_title: 'Marketing Assistant',
    company_name: "O'Conner Group",
    department: 'Marketing',
    avatar: 'https://robohash.org/voluptatemnihildeserunt.png?size=50x50&set=set1',
  },
  {
    id: 7,
    first_name: 'Hermie',
    last_name: 'Wetherburn',
    email: 'hwetherburn0@i2i.jp',
    gender: 'Female',
    job_title: 'Help Desk Operator',
    company_name: 'Gleichner and Sons',
    department: 'Product Management',
    avatar: 'https://robohash.org/modilaboreillum.png?size=50x50&set=set1',
  },
  {
    id: 8,
    first_name: 'Ailsun',
    last_name: 'Kinvig',
    email: 'akinvig1@exblog.jp',
    gender: 'Male',
    job_title: 'Cost Accountant',
    company_name: 'Littel-Abbott',
    department: 'Services',
    avatar: 'https://robohash.org/utveritatisbeatae.png?size=50x50&set=set1',
  },
  {
    id: 9,
    first_name: 'Hannah',
    last_name: 'Tole',
    email: 'htole2@slashdot.org',
    gender: 'Female',
    job_title: 'Marketing Manager',
    company_name: 'Zieme and Sons',
    department: 'Marketing',
    avatar: 'https://robohash.org/accusamusquasqui.png?size=50x50&set=set1',
  },
  {
    id: 10,
    first_name: 'Hilliard',
    last_name: 'Ellam',
    email: 'hellam3@mapy.cz',
    gender: 'Male',
    job_title: 'Accountant II',
    company_name: 'Davis, Jakubowski and Olson',
    department: 'Training',
    avatar: 'https://robohash.org/earumcumquenon.png?size=50x50&set=set1',
  },
  {
    id: 11,
    first_name: 'Addia',
    last_name: 'Selbach',
    email: 'aselbach4@stumbleupon.com',
    gender: 'Male',
    job_title: 'Financial Analyst',
    company_name: 'Aufderhar-Labadie',
    department: 'Sales',
    avatar: 'https://robohash.org/nonrepellatex.png?size=50x50&set=set1',
  },
  {
    id: 12,
    first_name: 'Norry',
    last_name: 'Swedeland',
    email: 'nswedeland5@wiley.com',
    gender: 'Female',
    job_title: 'Marketing Assistant',
    company_name: "O'Conner Group",
    department: 'Marketing',
    avatar: 'https://robohash.org/voluptatemnihildeserunt.png?size=50x50&set=set1',
  },
];

const Tabel = () => {
  return (
    <div className="Tabel">
      <table>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Job Title</th>
          <th>Company Name</th>
          <th>Department</th>
          <th>Avatar</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
              <td>{val.job_title}</td>
              <td>{val.company_name}</td>
              <td>{val.department}</td>
              <td>
                <img src={val.avatar}></img>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Tabel;
