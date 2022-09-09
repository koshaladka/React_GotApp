import React, {useState, useEffect} from 'react';
import './itemList.css';
/* import { Spinner } from 'reactstrap'; */
import Spinner from '../spinner';

function ItemList ({getData, onItemSelected, renderItem})  { //меняем класс на функцию и ииспользуем хуки

    const [itemList, updateList] = useState([]);
    /* state= {
        itemList: null
    } */

    useEffect(() => {
        getData()
        .then( (data) => {
           updateList(data);
        } )
    }, [] ) // пустой массив - говорит что нужо выполнить при появлении и исчезновении
/*     componentDidMount() {
        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            } )
    } */

    function renderItems(arr) {
        return arr.map((item, i) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <li 
                key={id}
                className="list-group-item"
                onClick={() => onItemSelected(id)}
                >
                    {label}
                </li>
            )
        })
    }


    if (!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
    
}
export default ItemList;