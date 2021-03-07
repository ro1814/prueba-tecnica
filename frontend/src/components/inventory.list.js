import React, {Component} from 'react';
import axios from 'axios'
import ShowMoreText from 'react-show-more-text';


export default class InventoryList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            products:[],
            currentPage: 1 ,
            paginationCount: 10,
        }
    }

    

    // Starting lifecycle and calling for data from database
    componentDidMount() {
        axios.get("/api/products")
        .then(response => {
            this.setState({products: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    
   

    // Function call for previous page button
    previousPage = () => {
        if (this.state.currentPage !==1){
            this.setState({
                currentPage: this.state.currentPage - 1})
        }
    }

    // Function call for next page button
    nextPage = () => {
        if (this.state.currentPage + 1 <= Math.ceil(this.state.products.length/this.state.paginationCount)){
            this.setState((prevState) => ({currentPage: (prevState.currentPage + 1)}))
        }           
    }

    // Mapping out GET data
    inventoryList() {
        
        // Slicing data for table pagination
        return this.state.products.slice(
            (this.state.paginationCount * (this.state.currentPage - 1)),
            (this.state.paginationCount * (this.state.currentPage))).map((products, fab) =>{
            return(
                    
                    <tr key={products._id}>
                    <td>{products.nombre}</td>
                    <td>{products.relevancia}</td>
                    <td>{products.precio}</td>
                    <td>
                        <ShowMoreText
                        /* Default options */
                        lines={3}
                        more='Ver Fabricante'
                        less='Ver menos'
                        className='btn btn-info'
                        
                        expanded={false}
                        width={80}
                    >
                    <button className="btn btn-info" rel="noopener noreferrer">Fabricante: {products.fab.nombre}, Dirección: {products.fab.direccion}, CIF: {products.fab.cif}.</button>
                    </ShowMoreText></td>

                    </tr>
                    
            );
        })
    }

    render() {

        // Conditional setup for rendering previous/next page buttons
        let previousEligible = false
        if (this.state.currentPage<=1){
            previousEligible = false
        }
        else{
            previousEligible = true
        }

        let nextEligible = true
        if(this.state.currentPage + 1 > Math.ceil(this.state.products.length/this.state.paginationCount)){
            nextEligible = false
        }
        else{
            nextEligible = true
        }

        return (
            <div className="container">
                
                <table className="table table-striped table-bordered table-hover" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Relevancia</th>
                            <th>Precio</th>
                            <th>+info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.inventoryList()}
                    </tbody>
                </table>
                    {previousEligible && <button className="btn btn-info" onClick={this.previousPage}>Página aterior</button>}
                    {nextEligible && <button className="btn btn-info" onClick={this.nextPage} style={{float: 'right'}}>Siguiente página</button>}
            </div>
        )
    }
    
}
