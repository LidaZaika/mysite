import React, { Component } from 'react';

class footer extends Component {
  render() {
    return (
        <div>
        <div className="footer-line">
        </div>
        <footer id="footer">
            <div className="form">
                        <h3>Форма обратной связи.</h3>
                <form nameName="MyForm">
                <p><input className="input" name="name" type="text" style={{width:"50%"}} /> Ваше имя*</p>
                
                <p><input className="input" name="email" type="text" style={{width:"50%"}} /> Электронная почта*</p>
                
                <p><input className="input" name="sub" type="text" style={{width:"50%"}} /> Тема сообщения</p>
                
                <p>Текст сообщения:<br/><textarea name="body" cols="1" rows="5" style={{width:"100%"}} /></p>
                <p><input id="submit" value="Отправить" type="submit" /></p>
                </form>
            </div>
           <div class="contacts">
                <h3>Мои контакты</h3>
                email: 2501987@mail.ru;<br/>
                Телефон: 8(904)640-02-23
           </div>
           <div class="menu-footer" id="menu-footer">
               <h3>Меню</h3>
                <a href="#about">Обо мне</a><br/>
                <a href="#myprojects">Мои проекты</a>
           </div>
        </footer>
        </div>
    );
  }
}

export default footer;