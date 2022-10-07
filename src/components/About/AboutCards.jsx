import React from "react";
import  Container  from "react-bootstrap/Container";
import './AboutCards.css'


function AboutCards() {
    const members = [{
        name: 'Esraa Banat',
        nickName:'Full Stack Developer',
        breif: 'She have Biomedical Engineering Background , Self-motivator , Meticulous , Junior JS Developer Former CAD Designer @EONDental and she have good knowledg in those language ~Java Scribt , HTML , CSS~.',
        image: require('./AboutAssets/Esraa.png'),
        github: 'https://github.com/EsraaBanat',
        linkekIn: 'https://www.linkedin.com/in/esraabanat/'
    },
    {
        name: 'Shams Alsaraireh',
        nickName: 'Full Stack Developer', 
        breif: 'Likable and dedicated Full-stack web-developer using JavaScript, html, CSS, and NodeJS. Eager to offer superb coding and computer skills to help the organization I am working for to grow its client base and increase customer satisfaction in the IT industry.',
        image: require('./AboutAssets/shams.jpg'),
        github: 'https://github.com/shamssar',
        linkekIn: 'https://www.linkedin.com/in/shams-alsaraireh/'
    },
    {
        name: 'Sohaib Al-Momani',
        nickName: 'Full Stack Developer',
        breif: 'I studied Computer Science at The Hashemite University (HU) and am looking forward to developing my programming skills. and he have good knowledge in those language ~Java Scribe , HTML , CSS~.',
        image: require('./AboutAssets/suhaib.png'),
        github: 'https://github.com/SohaibAlmomani',
        linkekIn: 'https://www.linkedin.com/in/sohaib-almomani/'
    },
    {
        name: 'Ahmad Amaireh',
        nickName: 'Full Stack Developer',
        breif: 'Senior Quality Assurance, and he have good knowledg in those language ~Java Scribt , HTML , CSS~.',
        image: require('./AboutAssets/Ahmad.png'),
        github: 'https://github.com/AhmadAmaireh?tab=repositories',
        linkekIn: 'https://www.linkedin.com/in/ahmad-al-amaireh-95466b74/'
    },
    {
        name: 'Bnan Zhran',
        nickName: 'Full Stack & RPA Developer',
        breif: 'Graduated from Zarqa University ,he have 23 Years old ,he have Strong Knowledg in Problem solving and Robotics aoutomation and he have Some experiancein Android Development.',
        image: require('./AboutAssets/bnan.png'),
        github: 'https://github.com/ebnanzhran',
        linkekIn: 'https://www.linkedin.com/in/eng-bnan-zhran-8679b0202/'
    }
    ]
    return (
    <>
        <Container fluid='sm' style={{ margin: '13px 3rem 13px 5rem', display:'grid', gridTemplateColumns:'26rem 26rem 26rem' }} >
                {members.map((member) => {
                    return(
                    <figure class="image-block">
                        {/* <h1>The Beach</h1> */}
                        <img src={member.image} alt="" />
                        <figcaption>
                            <h3 id='name'>
                                {member.name}
                            </h3>
                                <h5 class="title">{member.nickName}</h5>
                            <br/>
                            <p id='breif'>{member.breif}</p>
                            <br/>
                            <ul class="social-icons">
                                    <a href={member.linkekIn} ><i class="fa fa-linkedin" id='linkedin'></i></a>
                                    <a href={member.github}><i class="fa fa-github" id='github'></i></a>
                            </ul>
                        </figcaption>
                    </figure>
                    )
                })}
        </Container>
    </>
    );
}

export default AboutCards;