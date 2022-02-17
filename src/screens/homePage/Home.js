import React from 'react'
import { Banner, Footer, Navbar, Partner, Start, Growth, Service } from '../../components'

const Home = () => {
  return (
	<>	
		
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
	</>
  )
}

export default Home