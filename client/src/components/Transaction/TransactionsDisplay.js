import React, {useState, useEffect} from 'react';
import NewTransaction from './NewTransaction';
import Transactions from './Transactions';
import Navigation from '../Navigation';
import createRequest from '../../request';

const TransactionsDisplay = () => {
    const [transactions, setTransactions] = useState([]);


    // const input = '/transactions.json';
    // useEffect(()=>{
    //     const fetchTransactions = async() => { 
    //         createRequest(input).then((data)=> {
    //             console.log(data);
    //             setTransactions(data);       
    //         })
    //     }   
    //     const timer = setTimeout(()=>{
    //         fetchTransactions();
    //     }, 1000);
    //     return () => clearTimeout(timer);    
    // }, [input]);

    useEffect(() => {
        const fetchTransactions = () => { 
            createRequest('/transactions.json')
            .then(result => {
                setTransactions(result); 
            })
        }   
        // const timer = setTimeout(()=>{
            fetchTransactions();
        // }, 1000);
        // return () => clearTimeout(timer);    
    }, []);

    const addTransactionHandler = (transaction) => {
        setTransactions((prevTransactions) => {
          return [transaction, ...prevTransactions];
        });
    };

    return (
        <div>
            {console.log(transactions)}
            <Navigation />
            <NewTransaction onAddTransaction={addTransactionHandler}/>
            <Transactions items={transactions}/>
        </div>
    )

}

export default TransactionsDisplay;