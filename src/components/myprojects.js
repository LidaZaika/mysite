import React, { Component } from 'react';

class myprojects extends Component {
  render() {
    return (
    <div className="myProject" id="myprojects">
        <h2>Мои проекты (redux в процессе доработки)</h2>
            Интернет-магазин "AutoParts" (html, css, react, redux)<br/>
            <img src="images/printscreenAP.png" width="20%" height="20%"/><br/>
            Ссылка на github: <a href="https://github.com/LidaZaika/AutoParts.git"><i>https://github.com/LidaZaika/AutoParts.git</i></a>
             Интернет-магазин "AutoParts" (Express)<br/>
            <img src="images/printscreenAP.png" width="20%" height="20%"/><br/>
            Ссылка на github: <a href="https://github.com/LidaZaika/AutoPartsExpress.git"><i>https://github.com/LidaZaika/AutoParts.git</i></a>
    </div>
    );
  }
}

export default myprojects;