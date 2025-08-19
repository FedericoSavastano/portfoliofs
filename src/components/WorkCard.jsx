import styled from 'styled-components';
import texts from '../data/texts';
import styles from '../styles/styles';

const Card = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    padding: 1rem;
    margin-bottom: 1rem;
    color: black;
    width: 25%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (max-width: 1024px) {
        width: 40%;
    }

    @media only screen and (max-width: 768px) {
        width: auto;
    }

    &:hover {
        -webkit-box-shadow: 10px 10px 5px 0px ${styles.color.turquoise};
        -moz-box-shadow: 10px 10px 5px 0px ${styles.color.turquoise};
        box-shadow: 10px 10px 5px 0px ${styles.color.turquoise};
    }

    a {
        //color: black;
        text-decoration: none;
    }
`;

const CardTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0.5rem 0rem;
`;

const CardText = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
`;

const TechElement = styled.a`
    font-size: 0.7rem;
    font-weight: bold;
    text-decoration: none;
    cursor: default;
    padding: 3px;
    border: solid ${styles.color.turquoise} 2px;
    border-radius: 5px;
    margin: 2px;
    color: purple;
`;

const TechWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardImgWrapper = styled.div`
    height: 14rem;
    display: flex;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FooterRow = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`;

const FooterLink = styled.a`
    font-size: 14px;
    font-weight: bold;

    text-decoration: none;
    color: #007bff;
    &:hover {
        text-decoration: underline;
    }
`;

const LinkTo = styled.a`
    color: ${styles.color.bubblegum};
    font-weight: bold;
    text-shadow: 1.2px 1.2px 2px ${styles.color.turquoise};
`;

const WorkCard = ({ work }) => {
    return (
        <Card>
            <CardTitle>
                {' '}
                <LinkTo href={`${window.location.href}${work.urlName}`}>
                    {' '}
                    {work.title}
                </LinkTo>{' '}
            </CardTitle>
            <CardImgWrapper>
                <LinkTo href={`${window.location.href}${work.urlName}`}>
                    <CardImg src={work.screenshot}></CardImg>
                </LinkTo>{' '}
            </CardImgWrapper>
            <CardText>{work.description}</CardText>
            <TechWrapper>
                {work.tech.map((tech) => (
                    <TechElement href='#' key={tech}>
                        {tech}
                    </TechElement>
                ))}
            </TechWrapper>

            <Footer>
                <FooterRow>
                    <FooterLink href={`${window.location.href}${work.urlName}`}>
                        {texts.workButtonFullProject}
                    </FooterLink>
                </FooterRow>
                <FooterRow>
                    <FooterLink href={work.liveDemo}>
                        {texts.workButtonLiveDemo}
                    </FooterLink>
                    <FooterLink href={work.gitHub}>
                        {texts.workButtonGitHub}
                    </FooterLink>
                </FooterRow>
            </Footer>
        </Card>
    );
};

export default WorkCard;
