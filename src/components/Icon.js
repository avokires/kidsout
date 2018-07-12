import React from 'react';

const IconMap = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="iconMap" className="hide"><symbol id="icon-star" viewBox="0 0 24 23"><path d="M6.5 20.992l5.924-3.084 5.778 3.109-1.126-6.56L21.8 9.853 15.313 8.9 12.376 3 9.51 8.875 3 9.855l4.627 4.601z" stroke="#C7C7C7" strokeWidth="2" fill="none" fillRule="evenodd"/></symbol><symbol id="icon-basket" viewBox="0 0 15 16"><g stroke="#000" fill="none" fillRule="evenodd"><path d="M.19 3.27h14.658M10.003 3.05V.77H5.034v2.374M12.474 3.268L11.41 14.612H3.629L2.564 3.235M6.125 5.956v5.97M8.844 5.956v5.97"/></g></symbol><symbol id="icon-resend" viewBox="0 0 13 15"><g fill="none" fillRule="evenodd"><path d="M.918 8.563A5.531 5.531 0 1 0 6.45 3.032" stroke="#000"/><path d="M4.124 1.888L6.483.015v6L2.806 2.933l1.318-1.045z" fill="#000"/></g></symbol><symbol id="icon-check" viewBox="0 0 12 9"><path d="M1 3.77L4.5 7 11 1" stroke="#5DCB8E" strokeWidth="2" fill="none" fillRule="evenodd"/></symbol><symbol id="icon-doublecheck" viewBox="0 0 18 9"><g stroke="#5DCB8E" strokeWidth="2" fill="none" fillRule="evenodd"><path d="M1 3.77L4.5 7 11 1M9.068 5.447L10.5 7 17 1"/></g></symbol></svg>
    );
};

const Icon = props => {
    return (
        <svg className={props.className + ' ' + props.iconName} onClick={props.onClick} data-id={props.id || false}>
            <use xlinkHref={'#' + props.iconName}></use>
        </svg>
    );
};

export default Icon;
export { IconMap };
