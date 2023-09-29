export default function Vehicle() {
    return (<>
        <div className="container-fluid">
            <div className="row">
                {/* {/ <!-- Sidebar Filters --> /} */}
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <h5>Filters</h5>
                            </li>
                            <li className="nav-item">
                                <label for="category">Category</label>
                                <select className="form-select" id="category">
                                    <option value="all">All</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="furniture">Furniture</option>
                                </select>
                            </li>

                            <li >
                                <label for="price">Year Slider</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="startYear" />
                                    <div class="input-group-prepend input-group-append">
                                        <span class="input-group-text">to</span>
                                    </div>
                                    <input type="text" class="form-control" id="endYear" />
                                </div>

                                <input type="range" className="styled-slider slider-progress" id="price" min="0" max="100" step="10" />
                            </li>

                            <li >
                                <label for="price">Odometer</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="startYear" />
                                    <div class="input-group-prepend input-group-append">
                                        <span class="input-group-text">to</span>
                                    </div>
                                    <input type="text" class="form-control" id="endYear" />
                                </div>

                                <input type="range" className="styled-slider slider-progress" id="price" min="0" max="100" step="10" />

                            </li>

                            <li>
                            <label for="price">Make</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Audi
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Mahendra
                                        </label>
                                </div>
                            </li>

                            <li>
                            <label for="price">Model</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            model 1
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            model 2
                                        </label>
                                </div>
                            </li>

                            <li className="nav-item">
                                <button className="btn btn-primary">Apply Filters</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* {/ <!-- Product List --> /} */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <h1>Product List</h1>
                    <div className="row">
                        {/* {/ <!-- Sample Product Cards --> /} */}
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="product-image.jpg" className="card-img-top" alt="Product Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 1</h5>
                                    <p className="card-text">Year 2023</p>
                                    <p className="card-text">Audi</p>
                                    <p className="card-text">Audi A4</p>
                                    <p className="card-text">Stack 3</p>
                                    <p className="card-text">14 km/L</p>
                                    <p className="card-text">WUASNAFG8EN000698</p>
                                    <p className="card-text">$142.00</p>
                                    <a href="!#" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <img src="product-image.jpg" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Product 2</h5>
                                    <p className="card-text">Year 2023</p>
                                    <p className="card-text">Audi</p>
                                    <p className="card-text">Audi A6</p>
                                    <p className="card-text">Stack 10</p>
                                    <p className="card-text">15 km/L</p>
                                    <p className="card-text">WUASNAFG8EN000698</p>
                                    
                                    <p className="card-text">$75.00</p>
                                    <a href="!#" className="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    </>)
};