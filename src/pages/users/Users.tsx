import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../Components/dataTable/dataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../Components/add/Add";


const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'img',
    headerName: "Avatar",
    width:100,
    renderCell:(params) =>{
      return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 110,
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    width:100,
    type:"boolean" 
  },

];



const Users = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new user</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add setOpen={setOpen} slug="user" columns={columns}/>}
    </div>
  )
}

export default Users
