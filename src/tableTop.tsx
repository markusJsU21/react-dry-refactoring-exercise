import React, { JSXElementConstructor } from "react";
import { JsxEmit } from "typescript";
const Table = ({children}:any) => {
    let subComponentList = Object.keys();

    let subComponents = subComponentList.map((key) => {
        return React.Children.map(children, (child) =>
            child.type.name === key ? child : null
        );
    });

    return (
        <>
            <div className='card'>
                {subComponents.map((component) => component)}
            </div>
        </>
    );
};

const THead = (props): JSX.Element => <thead className="t-head">{props.children}</thead>
Table.Header = Header;
const TBody = (props) :JSX.Element => <tbody className="t-body">{props.children}</tbody>
Table.Body = Body;
const TCell = (props) :JSX.Element => <td className="t-cell">{props.children}</td>
Table.Cell = Cell;

export default Table