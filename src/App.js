import Card from "./components/Card";
import Card1 from "./components/card1";
import Card2 from "./components/Card2";
import State from "./components/State";
import Data from './data.json';

function Apps() {
    // let items = []
    // for (let i = 0; i < Data.length; i++) {
    //     items.push(<Card todoTitle={Data[i].title} cardDesc={Data[i].desc} />)
    // }  
    //uporer loop er kaj ta e map diye korbo.

    let Datas = Data.map((item, ind) => <Card key={ind} todoTitle={item.title} cardDesc={item.desc} />)


    return <div>
        <h1 className='headingStyle'>ToDo app</h1>
        <Card todoTitle="Call mother" cardDesc="This is the desc of 1" />
        <Card todoTitle="Call father" cardDesc="This is the desc of 2" />
        <Card todoTitle="Call Babuni" cardDesc="This is the desc of 3" />
        <Card todoTitle="Call sister" cardDesc="This is the desc of 4" />

        {Datas}

        <div>
            <Card1 name="card1" desc="This is from card One (1)." />
            <Card2 name="card2" />
        </div>

        <div>
            <State />
        </div>

    </div>



}

export default Apps;