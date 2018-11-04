import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class MeetingsTable extends Component {
    render() {
        return (
            <Table color='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Food</Table.HeaderCell>
                        <Table.HeaderCell>Calories</Table.HeaderCell>
                        <Table.HeaderCell>Protein</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Apples</Table.Cell>
                        <Table.Cell>200</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Orange</Table.Cell>
                        <Table.Cell>310</Table.Cell>
                        <Table.Cell>0g</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default MeetingsTable;