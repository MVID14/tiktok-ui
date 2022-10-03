import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button() {
    let Comp = 'button';
    const classes = cx('Wrapper');
    return <Comp className={classes}> abc</Comp>;
}

export default Button;
