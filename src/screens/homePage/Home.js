import React from 'react'
import { Banner, Footer, Navbar, Partner, Start, Growth, Service } from '../../components'

const Home = () => {
  return (
	<>	
		{/* Navbar Component */}
		<Navbar/>
		{/* BannerComponent */}
		<Banner/>
		{/* PartnersComponents */}
		<Partner/>
		{/* Prouct & Services */}
		<Service/>
		{/* Driving Growth */}
		<Growth/>
		{/* Get Start Component */}
		<Start/>
		{/* Footer Component */}
		<Footer/>
	</>
  )
}

export default Home