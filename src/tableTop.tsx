import React from 'react';
import './index.css'

interface TableElementWithProps {
    children: React.ReactNode
}

const Table = ({children}: TableElementWithProps): JSX.Element => {
    return (
        <>
            <table>
                 {children}
            </table>
        </>
    );
};

const THead = (props: TableElementWithProps):JSX.Element => <thead className="t-head"><h1>{props.children}</h1></thead>
Table.Header = THead;

const TBody = (props: TableElementWithProps):JSX.Element => <tbody className="t-body">{props.children}</tbody>
Table.Body = TBody;

const TCell = (props: TableElementWithProps):JSX.Element => <td className="t-cell">{props.children}</td>
Table.Cell = TCell;

export default Table
