export default function shipping(){
    return(
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFName">First Name</label>
                    <input type="text" class="form-control" id="inputFName"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLName">Last Name</label>
                    <input type="text" class="form-control" id="inputLName"/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City/Town</label>
                <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPhone">Shipping Phone</label>
                    <input type="inputPhone" class="form-control" id="inputPhone"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}