import Logo from '../Images/Logo.png';

export default function Header(){
    return (
        <header>
            <img src={Logo} alt="troll face"></img>
            <h3>Create Your Own Meme!</h3>
        </header>
    )
}