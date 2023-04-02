import { Link } from "react-router-dom";


function CreateNewProduct(){


    function alertBtn(){
        alert("Are you sure?");
    }



    return (
        <div>
            <h1>Create A New Product</h1>
            <hr/>

            <div>
            <form>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Name:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Product Number:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Color:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Standard cost:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">List price:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Size:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div><div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Weight:</label>
                    <div class="col-sm-6">
                    <input  class="form-control" ></input>
                    </div>
                </div><div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Sell Start Date:</label>
                    <div class="col-sm-6">
                    <input  class="form-control"></input>
                    </div>
                </div>
            </form>
                <div id="buttonsForm">

                    <button type="submit" class="btn btn-success">Save</button>
                    <Link to="/Products"><button class="btn btn-secondary">Back to List</button></Link>
                    <Link to="/Products"><button class="btn btn-danger"  onClick={alertBtn}>Cancel</button></Link>

                </div>
            </div>
            

        </div>
    )
}

export default CreateNewProduct;