import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background: #303f52;
  justify-content: center;

  @keyframes slide-top1 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  animation: slide-top1 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

`;




const NavPesquisa2 = styled.div`
  margin-top: 0px;
`;


const NavPesquisa = styled.div`
  margin-top: 200px;
  margin-left: 500px;
`;

const Input = styled.input`
  height: 34px;
`;

export { Nav, NavPesquisa, NavPesquisa2, Input };
