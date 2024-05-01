import mammamiaBG from '../assets/img/mammamia-bg.jpg'

const Header = (props) => {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${mammamiaBG})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
    <div className="container text-center header-content">
        <h1 className="header-titulo">{props.titulo}</h1>
        <p className="header-slogan">{props.slogan}</p>
        <hr></hr>
    </div>
</div>
  );
};

export default Header;