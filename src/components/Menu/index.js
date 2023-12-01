import React, { useState } from 'react';
import Logo from '../../assets/logo.png';

import * as S from './styles';

function Menu() {
  const [open, setOpen] = useState(false);

  const listMenu = [
    {
      id: 0,
      name: 'Favela Parque',
      anchor: '#o-programa',
    },
    {
      id: 1,
      name: 'Resultados 2023',
      anchor: '#edital',
    },
    {
      id: 2,
      name: 'As Comunidades',
      anchor: '#as-comunidades',
    },
    {
      id: 3,
      name: 'Galerias',
      anchor: '#galeria',
    },
    {
      id: 4,
      name: 'Realizadores',
      anchor: '#realizadores',
    },
    {
      id: 5,
      name: 'Você no Parque',
      anchor: '#vocenoparque',
    },
    {
      id: 6,
      name: 'Equipe',
      anchor: '#equipe',
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
  );

  return (
    <S.Header id='topo'>
      <S.Nav>
        <a href='#'>
          <S.Logo src={Logo} alt='Logo' />
        </a>
        {renderIconBurger()}
        <S.Ul open={open}>
          {listMenu.map(item => (
            <S.Li key={item.id}>
              <a href={item.anchor} onClick={() => setOpen(false)}>
                {item.name}
              </a>
            </S.Li>
          ))}
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}

export default Menu;
