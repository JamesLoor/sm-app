import arrow from '../assets/img/arrow.svg'
import styled from 'styled-components'

const SidebarStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  padding: 20px;
  width: 250px;
  .topSidebar {
    height: 100px;
    width: 100%;
    .logoSidebar {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      width: 100%;
      .circleSidebar {
        background-color: #093B32;
        padding: 10px;
        border-radius: 999px;
        text-align: center;
        h1 {
          font-size: 25px;
          color: white;
        }
      }
      .meditSidebar {
        margin-left: 10px;
        font-size: 25px;
      }
    }
    .listSidebar {
      display: block;
      margin: 0px auto;
      margin-top: 60px; 
      width: 150px;
      list-style: none;
      li {
        margin-top: 10px;
        cursor: pointer;
        transition: 300ms all;
        font-size: 17px;
        img {
          margin-left: 20px;
        }
      }
      li:hover {
        color: #093B32;
      }
    }
  }
  .underSidebar p {
    text-align: center;
    font-size: 15px;
  }
`

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className='topSidebar'>
        <div className='logoSidebar'>
          <div className='circleSidebar'>
            <h1>SM</h1>
          </div>
          <h1 className='meditSidebar'>Medit</h1>
        </div>
        <ul className='listSidebar'>
          <li>Inicio <img src={ arrow } alt='Inicio' /></li>
          <li>Pacientes <img src={ arrow } alt='Pacientes' /></li>
          <li>Agenda <img src={ arrow } alt='Agenda' /></li>
        </ul>
      </div>
      <div className='underSidebar'>
          <p>
            Version 1.0.0 <br />
            Desarrollado por HM-Computer <br />
            © 2021 HM-Computer | Todos los <br /> 
            derechos reservados
          </p>
      </div>
    </SidebarStyled>
  )
}