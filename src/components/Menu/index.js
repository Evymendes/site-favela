import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Logo,
  Face,
  Instagram
} from '../../assets';

import * as S from './styles';
  
  function Menu() {
    const [currentPage, setCurrentPage] = useState(0);
    const [open, setOpen] = useState(false)
    const listMenu = [
      {
        id: 0,
        name: 'O Programa',
        router: '/',
      },
      {
        id: 1,
        name: 'Edital 2023',
        router: '',
      },
      {
        id: 2,
        name: 'As Comunidades',
        router: '',
      },
      {
        id: 3,
        name: 'Galerias',
        router: '/contato',
      },
      {
        id: 4,
        name: 'Realizadores',
        router: '',
      },
      {
        id: 5,
        name: 'Equipe',
        router: '',
      },
    ];

    const renderIconBurger = () => (
      <S.StyledBurger
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </S.StyledBurger>
    )

    return (
      <header>
        <S.Logo src={Logo} alt='Logo'  />
        <S.Nav>
          {renderIconBurger()}
          {/* <S.Ul>
            {listMenu.map(i =>
              <S.Li currentPage={i.id === currentPage} href={i.router}>
                <Link to={i.router}>
                  {i.name}
                  {i.id !== listMenu.length -1 && <span>|</span>}
                </Link>
              </S.Li>)
            }
            <li>
              <a 
                rel="noopener"
                target="_blank" 
                href='https://pt-br.facebook.com/favelaparque/' 
              >
                <S.ImgIcon src={Face} alt='Icon Face' />
              </a>
            </li>
            <li>
              <a 
                rel="noopener"
                target="_blank"
                href='https://instagram.com/favelaparque?igshid=YmMyMTA2M2Y='
              >
                <S.ImgIcon src={Instagram} alt='Icon Instagram' />
              </a>
            </li>
          </S.Ul> */}
           <S.Ul open={open}>
              {listMenu.map(i =>
                <S.Li currentPage={i.id === currentPage} href={i.router}>
                  <Link to={i.router}>
                    {i.name}
                    {i.id !== listMenu.length -1 && <span>|</span>}
                  </Link>
                </S.Li>)
              }
              <S.ContentIcon>
              <li>
                <a 
                  rel="noopener"
                  target="_blank" 
                  href='https://pt-br.facebook.com/favelaparque/' 
                >
                  <S.ImgIcon src={Face} alt='Icon Face' />
                </a>
              </li>
              <li>
                <a 
                  rel="noopener"
                  target="_blank"
                  href='https://instagram.com/favelaparque?igshid=YmMyMTA2M2Y='
                >
                  <S.ImgIcon src={Instagram} alt='Icon Instagram' />
                </a>
              </li>
            </S.ContentIcon>
          </S.Ul>
        </S.Nav> 
      </header>
    );
  }
  
  export default Menu;
  