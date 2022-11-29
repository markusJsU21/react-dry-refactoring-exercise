import React, { JSXElementConstructor } from "react";
import './index.css'


const Table = ({children}: any) => {

    // let subComponentList = Object.keys(Table);

    // let subComponents = subComponentList.map((key) => {
    //     return React.Children.map(children, (child) =>
    //         child.type.name === key ? child : null
    //     );
    // });

    return (
        <>
            <table>
                 {children}
            </table>
        </>
    );
};

const THead = (props: any): any => <thead className="t-head">{props.children}</thead>
Table.Header = THead;

const TBody = (props: any) :any => <tbody className="t-body">{props.children}</tbody>
Table.Body = TBody;

const TCell = (props: any) :any => <td className="t-cell">{props.children}</td>
Table.Cell = TCell;

export default Table
