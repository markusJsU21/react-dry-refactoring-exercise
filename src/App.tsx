import React from 'react';
import ButtonPuss from './Button'
import Table from './tableTop'


const App = () => (
  <div>
    <h2>Buttons</h2>
    <ButtonPuss color={'black'} backgroundcolor={'yellow'} text={'coolt'}></ButtonPuss>
    <Table>
      <Table.Header>Jag är rubriken i headern</Table.Header>
      <Table.Body>
        <tr>
          <Table.Cell>Jag är en annan cell</Table.Cell>
          <Table.Cell>Jag är en cell!!!</Table.Cell>
          <Table.Cell>Jag är med</Table.Cell>
          <Table.Cell>Jag är en cell!!!</Table.Cell>
          <Table.Cell>Jag är en cell!!!</Table.Cell>
          <Table.Cell>
            <h1>
              Jag är en stor cell!!!
            </h1>
          </Table.Cell>
        </tr>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
        <tr>
          <Table.Cell>Jag är en cell!!!</Table.Cell>
        </tr>
        <Table.Cell>Jag är en cell!!!</Table.Cell>
      </Table.Body>
    </Table>

  </div>
)

export default App;
