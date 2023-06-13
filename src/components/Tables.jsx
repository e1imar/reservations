import React from 'react'
import { useGetTablesQuery } from '../services/reservation'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from './Table'

const Tables = ({personQ, time, date}) => {
  const {data, isLoading, error} = useGetTablesQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return <ListGroup>
    {Object.keys(data).filter(persons => persons >= personQ).map(tableGroup => <ListGroup.Item key={tableGroup}>
      <h2 className="mb-3">Tables for {tableGroup} persons</h2>
      {data[tableGroup]
      .map((table, i) => <Table key={table.id} name={'Table ' + (i+1)} disabled={table.reserves[date]?.includes(Number(time))}/>)}
    </ListGroup.Item>)}
  </ListGroup>
}

export default Tables