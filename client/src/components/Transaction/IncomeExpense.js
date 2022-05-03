import React,{useState} from 'react';
import { Card , Row, Col } from 'react-bootstrap';
const IncomeExpense = (props) => {
    console.log(props);
    const [incomeAmount, setIncomeAmount] = useState(0.00);
    const [expenseAmount, setExpenseAmount] = useState(0.00);
    const balance = incomeAmount - expenseAmount;
    return(
        <Row>
            <Col md={4}>
                <Card bg='primary' text='white' className='mb-2'>
                <Card.Header>Income</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {incomeAmount}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col> 
            <Col md={4}>
                <Card bg='primary' text='white' className='mb-2'>
                <Card.Header>Expense</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {expenseAmount}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col> 
            <Col md={4}>
                <Card bg='primary' text='white' className='mb-2'>
                <Card.Header>Expense</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {balance}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col> 
        </Row>
    )
}

export default IncomeExpense;