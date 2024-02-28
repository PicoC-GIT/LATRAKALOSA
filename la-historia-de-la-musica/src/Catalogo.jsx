import ArtistCard from './ArtistCard';
// import artistas from './artistas.json';

function Catalogo({artistas}) {
    return (
        <div className="app-container">
            <h1 id="sup">Catálogo de Artistas</h1>
            {artistas.map((artista) => (
                <div className='card-item' key={artista.id}>
                    <CatalogoCard {...artista} />
                </div>
            ))}
        </div>
    )
}

function CatalogoCard({nombre,genero,imagen}) {
    return (
                <div className="artist-info">
                    <div className="artist-details">
                      <h3>{nombre}</h3>
                      <p>Género: {genero}</p>
                      <ArtistCard imagen={imagen} />
                    </div>
                </div>
    );
}

export default Catalogo;