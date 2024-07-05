import { Radio } from 'antd';

function ProductVariant() {
    return (
        <div id="wrapper">
            <Radio.Group getContainer={() => document.getElementById('wrapper')} defaultValue="a" buttonStyle="solid">
                <Radio.Button className="variant-item" value="a">
                    Hangzhou
                </Radio.Button>
                <Radio.Button className="variant-item" value="b">
                    Shanghai
                </Radio.Button>
                <Radio.Button className="variant-item" value="c">
                    Beijing
                </Radio.Button>
                <Radio.Button className="variant-item" value="d">
                    Chengdu
                </Radio.Button>
            </Radio.Group>
        </div>
    );
}

export default ProductVariant;
