import React, {useState} from 'react';
import { Form , Row, Col, Button } from 'react-bootstrap';
// import {CloudinaryContext} from 'cloudinary-react';


const TransactionForm = (props)=>{
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredType, setEnteredType] = useState('Expense');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');

    //check validation
    const [amountIsValid, setAmountIsValid] = useState(true);

    const uploadImage =() => {
        const data = new FormData();
        data.append('file', image)
        data.append('upload_preset', 'ese6jnd3')
        data.append("cloud_name", 'dgpwctfjt')
        fetch("https://api.cloudinary.com/v1_1/dgpwctfjt/image/upload",{
            method: 'post',
            body: data
        }).then(resp => 
            resp.json()
        ).then(data => {
            setUrl(data.url);
            console.log(data.url);
        }).catch(err => console.log(err))
    }
    


    const submitHandler =(event) => {
        event.preventDefault();  

        if (enteredAmount.trim()==="") {
            setAmountIsValid(false);
            return;
        }
        setAmountIsValid(true);

        const transactionData = {
            typeof: Number(enteredType),
            amount: Number(enteredAmount), 
            title: enteredTitle,
            description: enteredDescription,  
            receipt: url, 
            date: new Date(enteredDate)
        };
        props.onSaveTransactionData(transactionData);
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <Row className="align-items-center">
            <Col sm={2} className="my-1">
                <label>Date</label>
                <Form.Control  type="date" value={enteredDate} min="2021-01-01" max="2025-12-31" onChange={(e)=> setEnteredDate(e.target.value)}/>
            </Col>
    
            <Col sm={2} className="my-1">
                <label>Income/Expense</label>
                <Form.Select value={enteredType} onChange={(e) => setEnteredType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="0">Expense</option>
                <option value="1">Income</option>
                </Form.Select>
            </Col>  

            <Col sm={2} className="my-1">
                <label>Category</label>
                <Form.Control type="Title" value={enteredTitle} />
            </Col>
            <Col sm={2} className="my-1">
                <label>Title</label>
                <Form.Control type="Title" value={enteredTitle} onChange={(e)=> setEnteredTitle(e.target.value)}/>
            </Col>

            <Col sm={2} className="my-1">
                <label>Amount</label>
                <Form.Control type="number" value={enteredAmount} min="0.01" step="0.01" onChange={(e) => setEnteredAmount(e.target.value)}/>
                {!amountIsValid && <p className='error-text'>Please enter an amount </p>}
            </Col>

            <Col sm={2} className="my-1">
                <label>Description</label>
                <Form.Control type="text" value={enteredDescription} onChange={(e)=> setEnteredDescription(e.target.value)}/>
            </Col>
            <Col sm={2} className="my-1">
                <label>Upload</label>
                <Form.Control type="file" onChange={(e)=> setImage(e.target.files[0])}/>
            </Col>

            <Col xs="auto" className='my-1'>
                <Button type="submit" onClick={uploadImage}>Add</Button>
                <Button type="button" onClick={props.onCancel}>Cancel</Button>
            </Col>
            </Row>
    </form>
    );
};

export default TransactionForm;