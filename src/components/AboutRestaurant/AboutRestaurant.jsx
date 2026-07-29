import React from 'react'
import './AboutRestaurant.css'
import { generalpics } from '../../assets/Suraj Menu/pictures'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const AboutRestaurant = () => {
    const isAboutRes = true;
  return (
    <>
    <Header isAddpage={isAboutRes} />
    <div className="main-container">
        <div className="restaurant-heading"><h2>Royal Bangla</h2></div>
        <div className="restaurant-img"><img src={generalpics.suraj_img} alt="Royal Bangla" /></div>
        <div className="restaurant-desc">Bienvenue chez Royal Bangla, votre destination pour une cuisine indienne et pakistanaise authentique au cœur de Nantes. Notre passion est de vous offrir des saveurs riches et des épices soigneusement sélectionnées, préparées avec amour et tradition.

Chaque plat que nous servons raconte une histoire — des recettes transmises de génération en génération, revisitées avec une touche moderne pour satisfaire tous les palais. Des currys parfumés aux biryanis généreux, en passant par nos tandooris grillés à la perfection, nous mettons un point d'honneur à utiliser des ingrédients frais et de qualité.

Chez Royal Bangla, nous croyons que la bonne nourriture rassemble les gens. Que vous veniez pour un déjeuner rapide, un dîner en famille ou une soirée entre amis, notre équipe vous accueille avec chaleur et hospitalité.

Merci de faire partie de notre aventure culinaire. Nous avons hâte de vous régaler.</div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutRestaurant
