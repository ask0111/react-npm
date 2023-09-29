import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';


const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

const DataTables = () => {
    const column = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'City',
            selector: row => row.address.city,
            sortable: true
        },
    ]


    useEffect(()=>{
        const fetchData = async()=>{
            axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> {setRecords(res.data); setFillterRecords(res.data)}).catch((err)=> console.log(err));
        }
        fetchData();
    }, []);

    const [records, setRecords] = useState([]);
    const [fillterRecords, setFillterRecords] = useState([]);

    const HandlerFilter = (event)=>{
        const newData = fillterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setRecords(newData);
    }

    return (
        <div style={{padding: '50px 10%', backgroundColor: 'gray'}}>
            <div style={{display: 'flex', justifyContent: 'right'}}>
                <input type='text' placeholder='Search...' onChange={HandlerFilter} style={{padding: '6px 10px'}}/>
            </div>
            <DataTable 
            columns={column}  
            data={records}
            pagination
            selectableRows
            fixedHeaderScrollHeight="300px"
            selectableRowsRadio="radio"
            // expandableRowsComponent={ExpandedComponent}
            // selectableRowsComponentProps={selectProps}

            direction="ltr"
  expandOnRowClicked
  expandableRows

 
  responsive
  
  selectableRowsHighlight
  selectableRowsNoSelectAll
  
  subHeaderAlign="right"
  subHeaderWrap
            ></DataTable>
            {/* <KitchenSinkStory
  direction="ltr"
  expandOnRowClicked
  expandableRows
  fixedHeaderScrollHeight="300px"
  pagination
  responsive
  selectableRows
  selectableRowsHighlight
  selectableRowsNoSelectAll
  selectableRowsRadio="radio"
  subHeaderAlign="right"
  subHeaderWrap
/> */}
        </div>
    );
};

export default DataTables;