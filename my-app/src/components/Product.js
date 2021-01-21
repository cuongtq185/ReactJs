import React, { Component } from 'react';
class Product extends Component {

    showInProduct(product){
        if(product.status){
            return <h3>
                id : {product.id} <br/>
                name: {product.name} <br/>
                price : {product.price} <br/>
                status: {product.status ? 'active':'pending'}
            </h3>
        }
    }
    render() {
        var product ={
            id : 1,
            name : 'IP12',
            price : 15000000,
            status : true
        };

        var user = [
            {
                id : 1,
                name : 'Nguyen Van A'
            },
            {
                id : 2,
                name : 'Nguyen Van B'
            },
            {
                id : 3,
                name : 'Nguyen Van C'
            }
        ]

        var elements = user.map((user, index) =>{  
            return <div key={user.id}>
                <h2>{user.id}</h2>
                <span >{user.name}</span>
            </div>
        });
        return (

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img className='profile-image' alt = "ip12" src=""/>
                    <div className="caption">
                   {this.showInProduct(product)}
                  {elements}
                        
                        <p>
                            <a href="index.html" className="btn btn-primary">Mua hàng</a>
                        </p>                       
                    </div>
                    
                </div>
                
            </div>


        );
    }
}

export default Product;