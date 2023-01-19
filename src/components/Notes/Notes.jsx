import React from "react";
import ThemeList from "../ThemeList/ThemeList";
import HeadlineNavbar from '../HeadlineNavbar/HeadlineNavbar';
import Note from '../Note/Note';

const Notes = () => {
  return (
    <main className='notes'>
      <div className='notes__section'>
        {/* Здесь будет компонент поисковой строки */}
        <ThemeList />
        <HeadlineNavbar />
        <Note title={'Render Tree'}
      text={'Render Tree — это дерево видимых (!) элементов построенных в том порядке, в котором они должны рендериться на странице. Обратите внимание, что элементы имеющие css правило display: none или другие, отрицательно влияющие на отображение — не будут находится в render tree. Браузер строит Render Tree чтобы точно определить что ему нужно отрисовать и в каком порядке. Построение Render дерева происходит примерно так: начиная с рутового элемента (html), парсер проходит по всем видимым элементам (пропуская link, script, meta, скрытые через css элементы) и для каждого видимого элемента находит соответствующее css правило из CSSOM.'}
      />
      </div>
    </main>
  )
}

export default Notes;
