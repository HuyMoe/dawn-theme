import { Dropdown } from 'antd';

function DropDown({ children, items }) {
    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            {children}
        </Dropdown>
    );
}

export default DropDown;
