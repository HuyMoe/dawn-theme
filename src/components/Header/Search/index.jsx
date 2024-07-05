import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import SearchItem from '../../SearchItem/SearchItem';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getSearchResult } from '../../../module';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        getSearchResult(searchValue).then((res) => {
            return setSearchResult(res.docs);
        });
    }, [searchValue]);

    return (
        <Tippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('result-span')}>Result</h4>
                        {searchResult.map((item, index) => {
                            return <SearchItem key={index} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('header-search')}>
                <input
                    className={cx('search')}
                    placeholder="Search for..."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
