import axios from 'axios'
import { useEffect, useState } from 'react'
import ScoopOptions from './ScoopOptions'
import Row from 'react-bootstrap/Row'

function Options({ optionType }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
            
            });
        
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;

    const optionItems = items.map((item) => 
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
     )
    
    return (
        <Row>{optionItems}</Row>
    )
}

export default Options