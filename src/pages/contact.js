import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Главная</Link>
      <Header headerText="Контакты" />
      <p>Отправьте нам сообщение</p>
    </div>
  );
};
