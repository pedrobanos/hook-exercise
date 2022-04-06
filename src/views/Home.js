import React from "react"
import HomeBox from "../components/HomeBox/HomeBox"
import { Link } from "react-router-dom"


const Home = () => {

    const footerDesctript = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur ipsum nunc, vel pulvinar ante accumsan nec.'


    return (

        <div className="d-flex mt-3">
            <div className="Home">
                <Link className="text-dark"
                    style={{ textDecoration: 'none' }}
                    to={`/posts`}>
                    <HomeBox img={'https://www.lavanguardia.com/files/image_948_465/uploads/2016/03/02/5fa2b2a76550a.jpeg'}
                        title={'Posts'}
                        description={footerDesctript}
                    />
                </Link>
                <Link className="text-dark"
                    style={{ textDecoration: 'none' }}
                    to={`/comments`}>
                    <HomeBox img={'https://www.drivedigital.in/wp-content/uploads/2020/03/Funny-YouTube-Comments-You-Cannot-Miss-In-2020-1024x452.jpg'}
                        title={'Comments'}
                        description={footerDesctript}
                    />
                </Link>
                <Link className="text-dark"
                    style={{ textDecoration: 'none' }}
                    to={`/photos`}>
                    <HomeBox img={'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-1024-80.jpg'}
                        title={'Photos'}
                        description={footerDesctript}
                    />
                </Link>
            </div>

        </div>
    )
}

export default Home