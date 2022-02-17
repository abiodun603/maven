import React from 'react'
import { ServiceCaption, ServiceColumnOne, ServiceColumnTwo, ServiceContainer, ServiceDescription, ServiceList, ServiceProduct, ServiceWrapper } from './StyledService'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { COLORS } from '../../../assets/theme/theme';
import service from "../../../assets/images/home/service.svg"

const Service = () => {
  return (
    <>
        <ServiceWrapper>
                <ServiceContainer>
                    {/*  BOX 1*/}
                    <ServiceColumnOne>
                        {/* Product Title */}
                        <h3>
                            Product & Services
                            {/* <BsFillCheckCircleFill/> */}
                        </h3>
                        {/* Products */}
                        <ServiceProduct>
                            {/* Sub Description` */}
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>Data Preparation & Feature Engineering</h3>
                                    {/* discription */}
                                    <p>
                                        Data is the lifeblood that drives any successful AI & ML<br/>
                                        businness strategy
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>DevOps & Cloud Migration</h3>
                                    {/* discription */}
                                    <p>
                                        Let MavenCode help you make your organization's move to<br/>
                                        the Cloud a reality
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>AI & ML Alogrithm Implementation</h3>
                                    {/* discription */}
                                    <p>
                                        We can assess and implement AI and algorithms for you<br/>so we can help your goal
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>Data Pipeline</h3>
                                    {/* discription */}
                                    <p>
                                        Big Data Requires Big Infrastructure. At MavenCode, we<br/>
                                        build scalable AI & ML data pipelines for organizations
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>Data Visualization</h3>
                                    {/* discription */}
                                    <p>
                                        Storytelling with data is an integral part of any successful data<br/>
                                        acquisition, analysis, and monetization strategy
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                            <ServiceList>
                                {/* check icon */}
                                <BsFillCheckCircleFill style = {{color: COLORS.gray}}/>
                                <ServiceDescription>
                                    {/* title */}
                                    <h3>Managed Cloud Orchestra</h3>
                                    {/* discription */}
                                    <p>
                                        Let our experts guide you through the complicated and quickly changing<br/>
                                        landscape of application containerization and managed container<br/>
                                        orchestration
                                    </p>
                                </ServiceDescription>
                            </ServiceList>
                        </ServiceProduct>
                    </ServiceColumnOne>
                    
                    {/* B0X 2 */}
                    <ServiceColumnTwo>
                        {/* image */}
                        <div>
                            <ServiceCaption src={service} alt=""/>
                        </div>
                    </ServiceColumnTwo>
                </ServiceContainer>
            </ServiceWrapper>
    </>
  )
}

export default Service