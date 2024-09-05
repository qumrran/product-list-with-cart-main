import AddToCardBtn from './AddToCardBtn/AddToCardBtn';
import OrderSummary from './OrderSummary/OrderSummary';
import Header from './Header/Header';
import Modal from '../Modal/Modal';

import './Desserts.scss';

function Desserts({ data }) {
	return (
		
		<div className='desserts-container'>
		{/* <Modal /> */}

			<div className='desserts-list'>      
			<Header/>
			
				{data.map((dessert, index) => (
					<div key={index} className='dessert-item'>
						
						<div className='dessert-image-container'>
							<picture className='dessert-image'>
								<source
									srcSet={dessert.image.desktop}
									media='(min-width: 1024px)'
								/>
								<source
									srcSet={dessert.image.tablet}
									media='(min-width: 768px)'
								/>
								<source
									srcSet={dessert.image.mobile}
									media='(min-width: 100px)'
								/>
								<img
									src={dessert.image.thumbnail}
									alt={dessert.name}
									className='dessert-thumbnail'
								/>
							</picture>

							<AddToCardBtn dessert={dessert} />

						</div>

						<div className='dessert-details'>
							<span className='dessert-category'>{dessert.category}</span>
							<p className='dessert-name'>{dessert.name}</p>
							<p className='dessert-price'>${dessert.price}</p>
						</div>
					</div>
				))}
				   
			</div>

			
			<OrderSummary/>

		</div>
		
	);
}

export default Desserts;
