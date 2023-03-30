import React from "react";
import AboutProjectCard from "../AboutProjectCard/AboutProjectCard";

const AboutProject = () => {

  return (
    <section className='about-project' id="about-project">
      <div className='about-project__section'>
        <h2 className='about-project__title'>Как пользоваться сервисом</h2>
        <div className='about-project__container'>
          <AboutProjectCard picture={'about-project__picture_1'} title={`Регистрируйтесь`} about={`Авторизация с помощью google или github.`} />
          <AboutProjectCard picture={'about-project__picture_2'} title={`Создавайте разделы`} about={`Заметки можно группировать: создавать новые разделы или использовать созданные ранее.`} />
          <AboutProjectCard picture={'about-project__picture_3'} title={`Пишите заметки`} about={`Конспекты лучше оформлять в виде коротких заметок. Это позволит структурировать информацию, а потом — дать короткий и емкий ответ на собеседовании.`} />
          <AboutProjectCard picture={'about-project__picture_4'} title={`Повторяйте материал`} about={`К заметкам можно будет вернуться, чтобы освежить знания перед интервью.`} />
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
