import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/acc71b8e4493af59fd9fde3acb9151aa~c5_100x100.jpeg?x-expires=1666083600&x-signature=Q9LRNM4BbymL4Ecw162ySnpJaiI%3D"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn văn a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyen van a</span>
            </div>
        </div>
    );
}

export default AccountItem;
