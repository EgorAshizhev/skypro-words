import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;
export const SHConteiner = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const SHeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  & a {
    color: #FFFFFF;
  }
`;


export const SHeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  &::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}
`;

export const SHeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;


export const SPopUserSetName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const SPopUserSetMail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const SPopUserSetTheme = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
  & p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  }
`;

// Компонент для чекбокса темы
export const PopUserCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

// Компонент для кнопки выхода
export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  a {
    color: #565eef;
    text-decoration: none;
  }
`;












