import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import { Rating } from './Components/Rating/Rating';

function App() {
  return (
    <div>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsedValue={true} />
      <Accordion titleValue={"Users"} collapsedValue={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

type PageTitlePropsType = {    //  Typisation - assigning keys and it's specific values to props
  title: string
}

export default App;
