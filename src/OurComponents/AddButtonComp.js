import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';


export default function AddButtonComp(){


    return (
        <>
            <Link to='/CreateNewProduct'><button class="btn btn-primary">Create New Product</button></Link>
            
        </>
    )
}