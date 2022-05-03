import React, {useState} from 'react';
import Card from '../Card'
import './TransactionItem.css';
import TransactionDate from './TransactionDate';

const TransactionItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    const handleToggle= () => {
      setIsEditing(true);
    }

    return (
      <li>
        {isEditing && 
        <Card className='transaction-item'>
          <TransactionDate date={props.date} />
          <div className='transaction-item__description'>
            <h2>{props.type}</h2>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <div className='transaction-item__price'>${props.amount}</div>
          </div>
          <div>
            <button>Update</button>
            <button>Cancel</button>
          </div>
        </Card>
        }
        {!isEditing &&
          <Card className='transaction-item'>
            <TransactionDate date={props.date} />
            <div className='transaction-item__description'>
              <h2>{props.type}</h2>
              <h3>{props.title}</h3>
              <span>{props.description}</span>
              <div className='transaction-item__price'>${props.amount}</div>
            </div>
            <div>
              <button onClick={handleToggle}>Edit</button>
              <button>Delete</button>
            </div>
          </Card>
        
        
        }
      </li>
    );
  };
  
  export default TransactionItem;