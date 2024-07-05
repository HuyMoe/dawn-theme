import { Button, Form, Input, InputNumber, Space, Upload } from 'antd';
import { createCategory, createProduct } from '../../module';
import './styles.scss';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const { TextArea } = Input;

function UploadProduct() {
    const [formProduct] = Form.useForm();
    const [formCategory] = Form.useForm();
    const finishFormProduct = (value) => {
        value.image = value.image.map((item) => {
            return item.img;
        });
        createProduct(value);
    };
    const finishFormCategory = (value) => {
        if (value.image) {
            value.image = [value.image];
        }
        createCategory(value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upload-item')}>
                <Form
                    className="form-upload"
                    name={'upload'}
                    onFinish={finishFormProduct}
                    form={formProduct}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <label>Product name</label>
                    <Form.Item name={'name'}>
                        <Input />
                    </Form.Item>
                    <label>Price</label>
                    <Form.Item name={`price`}>
                        <InputNumber />
                    </Form.Item>
                    <label>Subtitle</label>
                    <Form.Item name={`material`}>
                        <TextArea rows={2} />
                    </Form.Item>
                    <label>Description</label>
                    <Form.Item name={`description`}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <label>Upload image</label>
                    {/* <Form.Item name={'image'}>
                        <Input />
                    </Form.Item> */}
                    <Form.List name="image">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            marginBottom: 8,
                                        }}
                                        align="baseline"
                                    >
                                        <Form.Item {...restField} name={[name, 'img']}>
                                            <Input />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add field
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <Button onClick={() => formProduct.submit()}>Upload</Button>
                </Form>
            </div>
            <div className={cx('upload-item')}>
                <Form
                    className="form-upload"
                    name={'upload'}
                    onFinish={finishFormCategory}
                    form={formCategory}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <label>Category name</label>
                    <Form.Item name={'name'}>
                        <Input />
                    </Form.Item>
                    <label>Category name</label>
                    <Form.Item name={'type'}>
                        <Input />
                    </Form.Item>
                    <label>Upload image</label>
                    <Form.Item name={'image'}>
                        <Input />
                    </Form.Item>
                    <Button onClick={() => formCategory.submit()}>Upload</Button>
                </Form>
            </div>
        </div>
    );
}

export default UploadProduct;
