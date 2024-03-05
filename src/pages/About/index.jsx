import React, {useEffect, useState} from "react";
import CafeteriaInfo from "../../components/CafeteriaInfo";
import { todosOsProdutos } from "../../mock/produtos";
import Search from "../../components/Search";
import Pills from '../../components/Pills'
import ItemCard from "../../components/ItemCard";
import { useParams, useSearchParams } from 'react-router-dom'
import db from '../../services/firebase'
import { collection, getDocs } from "firebase/firestore";


function About(){
    const [activeTab, setActiveTab] = useState("informations")
    const [products, setProducts] = useState([])

    const { filter } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('search'));

    function searchProducts(query) {
        // Convertendo a consulta para letras minúsculas para garantir uma correspondência sem distinção entre maiúsculas e minúsculas
        const queryLowerCase = query.toLowerCase();
    
        // Filtrando os produtos com base na consulta de pesquisa
        const filteredProducts = todosOsProdutos.filter(product => {
            // Convertendo o nome do produto para letras minúsculas
            const productNameLowerCase = product.name.toLowerCase();
            // Verificando se a consulta de pesquisa está presente no nome do produto
            return productNameLowerCase.includes(queryLowerCase);
        });
    
        // Retornando o array filtrado
        return filteredProducts;
    }

    function filterProducts(type) {
        return todosOsProdutos.filter(product => product.type === type);
    }
    useEffect(() => {
        const itemsCollection = collection(db, "produtos");
        getDocs(itemsCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })))
        });
    }, [])

    useEffect(() => {
        setProducts(todosOsProdutos)
    }, [])

    useEffect(() => {
        if(searchParams.get('search')) {
            setProducts(searchProducts(searchParams.get('search')))
        } else {
            setProducts(todosOsProdutos)
        }
    }, [searchParams.get('search')])
    
    useEffect(() => {
        if(filter) {
            setProducts(filterProducts(filter))
        } else {
            setProducts(todosOsProdutos)
        }
    }, [filter])
    
    // Criar array com os tipos únicos de produtos
    const uniqueProductTypes = new Set();
    const pills = todosOsProdutos.map((product) => {
        if (!uniqueProductTypes.has(product.type)) {
            uniqueProductTypes.add(product.type);
            return product.type;
        }
        return null;
    }).filter((type) => type !== null);


    return(
        <div className="py-5 px-40 ">
            <h1>Sobre a Cafeteria</h1>
        <CafeteriaInfo/>
        <Search/>
        <Pills types={pills}/>
        <div className="flex gap-5 flex-wrap justify-center mt-10">{ products.map((item, index) => <ItemCard key={index} item={item}/>)}</div>

        </div>
        
    )
}
export default About;