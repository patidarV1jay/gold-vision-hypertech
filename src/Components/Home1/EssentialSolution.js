import React from 'react'
import "../../Css/Solutions.css"

const EssentialSolution = () => {
  return (
    <div>
        <div className='container'>
            <div className='row essentailSolution'>
                <div className='col-lg-6 col-md-12 col-sm-12 col-12 solutionImage'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722254349/solutions1_s9yjoy.png' alt=''/>
                    <p>BEST IN GOLD VISION</p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-12 solutions'>
                    <div className='GoldVision'>
                        <h6>GOLD VISION COMPANY</h6>
                    </div>
                    <div className='modernBusiness'>
                        <h1>Essential IT Solutions For<br/>
                        Modern <span> Businesses.</span>
                        </h1>
                    </div>
                    <div className='cloudSolution'>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722255430/cloudbased_sdvmev.png' alt=''/>
                        <span><strong> Cloud Based Solutions </strong></span>
                        <p>
                        A cloud-based solution offers flexibility, cost savings, and efficiency for an IT company. It also enables easy scaling and management of resources, facilitating global operations.
                        </p>                 
                    </div>
                    <div className='cloudSolution'>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722314578/service2_s2rh3i.png' alt=''/>
                        <span><strong> Cybersecurity Solutions </strong></span>
                        <p>
                        Comprehensive security services to protect your digital assets and ensure data privacy.
                        </p>                 
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default EssentialSolution