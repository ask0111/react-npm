
const HandlerD = (row)=>{
    console.log(row.row.id, row)
}
export const USERS_COLUMNS = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Name",
        accessor: "first_name",
    },
    {
        Header: "Phone",
        accessor: "phone",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Job",
        accessor: "job"
    },
    {
        Header: "Delete",
        accessor: 'Delete',
        Cell: row => (
            <button onClick={() => HandlerD(row)}>
              Edit
            </button>
          ),
    }
]