import logo from "../Assets/icons/logo.svg";
import plus from "../Assets/icons/plus.svg";
import logOut from "../Assets/icons/log-out.svg";
import home from "../Assets/icons/home.svg";
import users from "../Assets/icons/users.svg";
import briefcase from "../Assets/icons/briefcase.svg";
import sport from "../Assets/icons/sport.svg";
import taskPlus from "../Assets/icons/task-plus.svg";
import moon from "../Assets/icons/moon.svg";
import userMenu from "../Assets/icons/user-menu.svg";
import edit from "../Assets/icons/edit.svg";
import trash from "../Assets/icons/trash.svg";
import clock from "../Assets/icons/clock.svg";
import calendar from "../Assets/icons/calendar.svg";

import avatar from "../Assets/img/header__avatar.png";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" className="logoIcon" />
          <h1 className="logoText">Tasks Book</h1>
        </div>
        <div className="categories">
          <h2>Категории</h2>
          <div className="categoriesList">
            <ul>
              <li>
                <img src={home} alt="home" />
                Дом
              </li>
              <li>
                <img src={users} alt="users" />
                Семья
              </li>
              <li>
                <img src={briefcase} alt="briefcase" />
                Работа
              </li>
              <li>
                <img src={sport} alt="sport" />
                Спорт
              </li>
            </ul>
            <button className="plusBtn">
              <img src={plus} alt="plus" />
              Добавить
            </button>
          </div>
        </div>
        <button className="logOutBtn">
          <img src={logOut} alt="log-out" />
          Выйти
        </button>
      </div>

      <div className="main">
        <div className="header">
          <button className="taskBtn">
            <img src={taskPlus} alt="new task" />
            Новая задача
          </button>
          <img className="moonIcon" src={moon} alt="moon " />
          <div className="userInfo">
            <p>Хорошего дня, username</p>
            <img src={avatar} alt="avatar" className="avatar" />
            <button className="userMenu">
              <img src={userMenu} alt="user menu" />
            </button>
          </div>
        </div>

        <div className="content">
          <div className="leftSection">
            <div className="taskInfo">
              <h3>Успехи за неделю</h3>
              <div className="taskCounter">
                <div className="itemCounter">
                  <p>Создано</p>
                  <div className="taskCount">
                    <h5>113</h5>
                    <p>задач</p>
                  </div>
                </div>
                <div className="itemCounter">
                  <p>Завершено</p>
                  <div className="taskCount">
                    <h5>97</h5>
                    <p>задач</p>
                  </div>
                </div>
                <div className="itemCounter">
                  <p>Удалено</p>
                  <div className="taskCount">
                    <h5>14</h5>
                    <p>задач</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tasks">
              <div className="taskList">
                <h3>Активные задачи</h3>
                <div className="taskListItems">
                  <div className="taskListItem">
                    <div className="taskTitle">
                      <input type="checkbox" />
                      <p>Приготовить вкусный ужин</p>
                    </div>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                  <div className="taskListItem">
                    <div className="taskTitle">
                      <input type="checkbox" />
                      <p>Устранить засор в раковине</p>
                    </div>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                  <div className="taskListItem">
                    <div className="taskTitle">
                      <input type="checkbox" />
                      <p>Стирка белого белья</p>
                    </div>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                  <div className="taskListItem">
                    <div className="taskTitle">
                      <input type="checkbox" />
                      <p>Разморозить холодильник</p>
                    </div>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="taskList">
                <h3>Завершенные задачи</h3>
                <div className="taskListItems">
                  <div className="taskListItem">
                    <p>Полить цветы</p>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                  <div className="taskListItem">
                    <p>Вызвать сантехника</p>
                    <div className="taskOptions">
                      <img src={edit} alt="edit" />
                      <img src={trash} alt="trash" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rightSection">
            <div className="timeDate">
              <h4>Такс такс такс</h4>
              <div className="timeDateContent">
                <div className="timeSection">
                  <p>На часах у нас</p>
                  <div className="time">
                    <img src={clock} alt="clock" />
                    <p>12:30:43</p>
                  </div>
                </div>
                <div className="calendarSection">
                  <p>На часах у нас</p>
                  <div className="calendar">
                    <img src={calendar} alt="calendar" />
                    <p>5 апреля 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
