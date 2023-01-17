import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets';

import * as S from './styles';
  
  function Menu() {
    const [currentPage, setCurrentPage] = useState(0);

    const listMenu = [
      {
        id: 0,
        name: 'O Programa',
        router: '/',
      },
      {
        id: 1,
        name: 'As comunidades',
        router: '',
      },
      {
        id: 2,
        name: 'Realizadores',
        router: '',
      },
      {
        id: 3,
        name: 'Contato',
        router: '/contato',
      },
      {
        id: 4,
        name: 'Redes Sociais',
        router: '',
      },
      {
        id: 5,
        name: 'Outros',
        router: '',
      },
    ];

    return (
      <header>
        <S.Nav>
          <S.Logo src={Logo} alt='Logo'  />
          <S.Ul>
            {listMenu.map(i =>
              <S.Li currentPage={i.id === currentPage} href={i.router}>
                <Link to={i.router}>
                  {i.name}
                  {i.id !== listMenu.length -1 && <span>|</span>}
                </Link>
              </S.Li>)
            }
          </S.Ul>
        </S.Nav> 
      </header>
    );
  }
  
  export default Menu;
  