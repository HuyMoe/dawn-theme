import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';
import './styles.scss';
import { Button, Col, Collapse, Form, Input, Row } from 'antd';

const cx = classNames.bind(styles);
const { TextArea } = Input;

const items = [
    {
        key: '1',
        label: 'Do you deliver to me?',
        children: <p>We deliver our goods to all of Manhattan and Brooklyn, Queens, the Bronx and parts of LA.</p>,
    },
    {
        key: '2',
        label: 'When do you deliver?',
        children: (
            <p>
                Customers can, depending on the delivery company, choose to pay online or in person, with cash or card.
                A flat rate delivery fee is often charged with what the customer has bought. Sometimes no delivery fees
                are charged depending upon the situation.[1] Tips are often customary for food delivery service.
                Contactless delivery may also be an option.
            </p>
        ),
    },
    {
        key: '3',
        label: 'What is meal delivery?',
        children: (
            <p>
                A meal delivery service (MDS) is a service that sends customers fresh or frozen, prepared meals
                delivered to their homes and offices.
            </p>
        ),
    },
    {
        key: '4',
        label: 'Whats the order minimum?',
        children: <p>There is no minimum order but to get free delivery you'll have to spend $20+.</p>,
    },
    {
        key: '5',
        label: 'Delivery of ingredients, what is that?',
        children: (
            <p>
                Various meal kit delivery subscription services have started in Europe and North America since 2007.
                These typically have pre-measured ingredients designed for accompanying recipes.
            </p>
        ),
    },
    {
        key: '6',
        label: 'Grocery delivery',
        children: (
            <p>
                Grocery delivery differs greatly from meal delivery in the sense that it is usually sent as a parcel
                through common mailing services like USPS or FedEx, if it is only non-perishables. Since non-perishable
                items are normally packaged before arriving at grocery stores, they can easily be repackaged and
                delivered to customers without any special care. Sometimes, dry ice is added to keep perishable items
                fresh. Fresh and frozen foods complicate delivery which is done, usually by store/provider employees or
                third party services.
            </p>
        ),
    },
];

function FAQ() {
    return (
        <div className={cx('wrapper')}>
            <h1>Frequently asked questions</h1>
            <div className={cx('content')}>
                <Row gutter={[24, 0]}>
                    <Col flex="2">
                        <Collapse accordion items={items} className="accordion" />
                    </Col>
                    <Col flex="1">
                        <div className={cx('form-faq')}>
                            <h2>Don’t find the answer? Ask us!</h2>
                            <Form>
                                <Form.Item>
                                    <Input placeholder="Name" style={{ padding: '12px' }} />
                                </Form.Item>
                                <Form.Item>
                                    <Input placeholder="Email" style={{ padding: '12px' }} />
                                </Form.Item>
                                <Form.Item>
                                    <TextArea rows={7} placeholder="Message" style={{ padding: '12px' }} />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="btn-submit-faq">Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FAQ;
