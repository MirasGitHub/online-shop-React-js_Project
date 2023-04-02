import { Link } from "react-router-dom";
import AddButtonComp from "./AddButtonComp";
import EditAllProps from "./EditAllProps";



function deleteRow(){
    console.log("row deleted");
};
function editRow(){
   
    return(
        <>
            {products.map(c =>
            <EditAllProps
                {...c} />
            )}
        </>
    )
    
};

var editButton = <Link to='/EditPage'><button className="btn btn-secondary" onClick={editRow}>Edit</button></Link>;
var deleteButton = <button className="btn btn-danger" onClick={deleteRow}>Delete</button>;
var controlButtons = [editButton, deleteButton];

var products = [
    {Name: "HL Road Frame - Black, 58", Number: "FR-R92B-58", Color: "Black", Price: 900, Date: new Date(2019, 11, 9), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 58", Number: "FR-R92B-58", Color: "Red", Price: 1431.50, Date: new Date(2021, 4, 1), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 62", Number: "FR-R92B-62", Color: "Red", Price: 1500, Date: new Date(2020, 0, 11), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 44", Number: "FR-R92B-44", Color: "Red", Price: 1431.50, Date: new Date(2021, 9, 1), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 48", Number: "FR-R92B-48", Color: "Red", Price: 900, Date: new Date(2010, 8, 1), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 52", Number: "FR-R92B-52", Color: "Red", Price: 372.43, Date: new Date(2018, 7, 7), Actions: controlButtons},
    {Name: "HL Road Frame - Red, 56", Number: "FR-R92B-56", Color: "Red", Price: 900, Date: new Date(2017, 2, 3), Actions: controlButtons},
    {Name: "HL Road Frame - Black, 58", Number: "FR-R92B-58", Color: "Black", Price: 1500, Date: new Date(2020, 0, 1), Actions: controlButtons},
    {Name: "HL Road Frame - Black, 60", Number: "FR-R92B-60", Color: "Black", Price: 789, Date: new Date(2022, 1, 1), Actions: controlButtons},
    {Name: "HL Road Frame - Black, 62", Number: "FR-R92B-62", Color: "Black", Price: 372.43, Date: new Date(2021, 0, 1), Actions: controlButtons}
];


export default function ProductsList(){
    

    let productListRows = [];

    for(let p of products){
        
        let row = 
        <tr>
            <td>{p.Name}</td>
            <td>{p.Number}</td>
            <td>{p.Color}</td>
            <td>{p.Price.toFixed(2)}</td>
            <td>{p.Date.toString().slice(4,16)}</td>
            <td>{p.Actions}</td>    

        </tr>

        productListRows.push(row);
    }

    if (products.length === 0) {
        productListRows =
            <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                    <h1>No Products!</h1>
                </td>
            </tr>;
    }

    return(
        <div>
            <table className="table table-bordered">
                <tr>
                    <th>Product Name</th>
                    <th>Product Number</th>
                    <th>Color</th>
                    <th className='number'>List Price</th>
                    <th>Modified Date</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    {productListRows}
                </tbody>
            </table>
            <div>
                <AddButtonComp/>
            </div>
            
        </div>
    )
}