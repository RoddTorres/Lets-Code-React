import profile from './profile.json'
import {Container, PersonalArea, Category, Img, Name, City, Job, ButtonArea, Button, SkillsArea, SkillsTitle, SkillsContent} from './styles'

const UserCard = () => (
    <Container>
        <PersonalArea>
            <Category>{profile.category}</Category>
            <Img src= {profile.photo} />
            <Name>{profile.name}</Name>
            <City>{profile.city}</City>
            <Job>{profile.job}</Job>
            <ButtonArea>
                <Button>Message</Button>
                <Button>Following</Button>
            </ButtonArea>
        </PersonalArea>

        <SkillsArea>
            <SkillsTitle>SKILLS</SkillsTitle>
            <SkillsContent>{profile.skills.map(skills => <Button>{skills}</Button>)}</SkillsContent>
        </SkillsArea>
    </Container>
)

export default UserCard