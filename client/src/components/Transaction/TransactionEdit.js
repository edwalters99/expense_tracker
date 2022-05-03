import React, {useState, useEffect} from 'react';
import createRequest from '../../request';
import {Row,Col,Form, Button} from 'react-bootstrap';

const TransactionEdit = (props)=>{
    console.log(props);
    const [enteredDescription, setEnteredDescription] = useState(props.description);
    const [enteredAmount, setEnteredAmount] = useState(props.amount);
    const [enteredDate, setEnteredDate] = useState(props.date);
    const [enteredTitle, setEnteredTitle] = useState(props.title);
    const [enteredType, setEnteredType] = useState(props.type);
    const [enteredCategory, setEnteredCategory]=useState(props.category_id);
    const [url, setUrl] = useState('');
    const [categoryList, setCategoryList] = useState([]); 
    //check validation
    const [formIsValid, setFormISValid] = useState(true);

    const uploadImage =(e) => {
        setFormISValid(false);
        const image = e.target.files[0];
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
            setFormISValid(true);
            if (data.url){
                setFormISValid(true);
            }
        })
    }
    
    
    const input = '/categories.json';
    useEffect(()=>{
        const fetchCategories = async() => { 
            createRequest(input).then((data)=> {
                console.log(data);
                setCategoryList(data);       
                })
        }
        
        const timer = setTimeout(()=>{
            fetchCategories();
        }, 1000);
        return () => clearTimeout(timer);    
    }, [input]);
    let record = props.items;
    let defaultType = record.type_of? record.type_of : "";
    let defaultAmount = record.amount? record.amount : "";
    
    let defaultDate = record.date? new Date(record.date).toISOString().split('T')[0]: "";
    let defaultTitle = record.title? record.title: "";
    let defaultDescription = record.description? record.description : "";
    let defaultFile = record.receipt? record.receipt : "";
    let defaultCategory = record.category_id? record.category_id: "";

    const submitHandler =(event) => {
        event.preventDefault();  

        // if (enteredAmount.trim()==="") {
        //     setAmountIsValid(false);
        //     return;
        // }
        // setAmountIsValid(true);
        const transactionData = {
            type_of: enteredType,
            amount: enteredAmount, 
            title: enteredTitle,
            description: enteredDescription,  
            receipt: url, 
            date: enteredDate,
            category_id: Number(enteredCategory),
        };
        props.onSaveTransactionData(transactionData);
        setEnteredDescription('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormISValid(false);
    }

    return (
    <div >
    <form onSubmit={submitHandler}>
        <Row className="align-items-center">
            <Col sm={4} className="my-1">
                <label>Income/Expense</label>
                <Form.Select defaultValue={defaultType} value={enteredType} onChange={(e) => setEnteredType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
                </Form.Select>
            </Col>  
        </Row>
        <Row className="align-items-center">
            <Col sm={3} className="my-1">
                <label>Date</label>
                <Form.Control  defaultValue={defaultDate} type="date" value={enteredDate} min="2021-01-01" max={new Date()} onChange={(e)=> setEnteredDate(e.target.value)}/>
            </Col>
    
            <Col sm={3} className="my-1">
                <label>Category</label>
                <Form.Select value={enteredCategory} onChange={(e)=>setEnteredCategory(e.target.value)}>
                {categoryList.map(category => (
                        <option value={category.id}>&#129409; {category.name}</option>
                ))}
                </Form.Select>
            </Col>

            <Col sm={3} className="my-1">
                <label>Title</label>
                <Form.Control type="Title" defaultValue={defaultTitle} value={enteredTitle} onChange={(e)=> setEnteredTitle(e.target.value)}/>
            </Col>

            <Col sm={2} className="my-1">
                <label>Amount</label>
                <Form.Control defaultValue={defaultAmount} type="number" value={enteredAmount} min="0.01" step="0.01" onChange={(e) => setEnteredAmount(e.target.value)} placeholder="$"/>
                {/* {!amountIsValid && <p className='error-text'>Please enter an amount </p>} */}
            </Col>
        </Row>    
        <Row className="align-items-center">
            <Col sm={6} className="my-1">
                <label>Description</label>
                <Form.Control type="text" defaultValue={defaultDescription}value={enteredDescription} onChange={(e)=> setEnteredDescription(e.target.value)}/>
            </Col>
            <Col sm={3} className="my-1">
                <label>Upload</label>
                <Form.Control type="file" onChange={uploadImage}/>
            </Col>
        
            <Col sm={1} className='my-1'>
                {formIsValid &&
                    <Button type="submit">Add</Button>
                }
                {!formIsValid &&
                    <Button type="submit" disabled>Uploading..</Button>
                }
            </Col>
            <Col sm={1} className='btn-group ml-auto'>
                <Button type="button" onClick={props.onCancel}>Cancel</Button>
            </Col>
            </Row>
    </form>
    </div>
    );
};

export default TransactionEdit;