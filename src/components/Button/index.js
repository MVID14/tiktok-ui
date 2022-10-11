import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, small, large, outline, disable, rounded, children, onClick, ...passProps }) {
    let Comp = 'button';
    const classes = cx('Wrapper', {
        primary,
        small,
        large,
        outline,
        disable,
        rounded,
    });
    const props = {
        onClick,
        ...passProps,
    };
    // remove event in button
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
