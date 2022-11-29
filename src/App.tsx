import React from 'react';
import ButtonPuss from './Button'
import Table from './tableTop'


const App = () => (
  <div>
    <h2>Buttons</h2>
    <ButtonPuss color={'black'} backgroundcolor={'yellow'} text={'coolt'}></ButtonPuss>
    <Table>
      <Table.Header/>
      <Table.Body>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
      </Table.Body>
    </Table>

  </div>
)

export default App;
