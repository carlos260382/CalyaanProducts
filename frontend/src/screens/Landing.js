import React, { useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NavLink } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions.js';
import styles from '../style/Landing.module.css';
import productSalud from '../assent/ProductSalud.jpg';
import productBelleza from '../assent/Productbelleza.jpg';


//import {subscription} from '../webPush/main.js'

export default function Landing (){
	const dispatch = useDispatch();
	const productCategoryList = useSelector((state) => state.productCategoryList);
	const {
	  categories,
	} = productCategoryList;
	useEffect(() => {
	  dispatch(listProductCategories());
	}, [dispatch]);

const productsBelleza = categories? categories.find((c)=> {
	return c
} ):'';

const productsSalud = categories? categories.slice(1).find((c)=> {
	return c
} ):'';

console.log('belleza', productsBelleza);
console.log('salud', productsSalud);

	// useEffect(()=>{
	// 	if ("serviceWorker" in navigator) {
	// 		subscription().catch(err => console.log(err));
	// 	  }

	// 	subscription().catch(err => console.log('este es error subscription', err));

	// },[])
	//console.log('categorias', categories)
	
return(

<div className={styles.container}>

<div className={styles.Card}>
<NavLink to= {`/search/category/${productsSalud}`}  >
<img src={productSalud} alt=""/>
<h2>Productos Saludables</h2>
</NavLink>
</div>

<div className={styles.Card}>
<NavLink to={`/search/category/${productsBelleza}`}>
<img src={productBelleza} alt=""/>
<h2>Productos de Belleza</h2>
</NavLink>
</div>
</div>
)
};