// Albums.js
import React from 'react';
import { useParams } from 'react-router-dom';
import artistas from './artistas.json';
import "./Album.css"
/*
const Albums = ({ artistas }) => {
  const { id } = useParams();
  const artistaSeleccionado = artistas.find((artista) => artista.id === parseInt(id));

  if (!artistaSeleccionado) {
    return <div>Artista no encontrado</div>;
  }
  return (
    <div>
      <h2>Álbumes de {artistaSeleccionado.nombre}</h2>
      <ul>
        {artistaSeleccionado.albumes.map((album) => (
          <li key={album.id}>
            <strong>{album.titulo}</strong> - Año: {album.anio}
          </li>
        ))}
      </ul>
    </div>
  );
};
*/

function Albums() {
  return (
    <div className="Albu">
      <h2>Albumes de Kanye</h2>
      <ul>
        <li>
          <strong>Graduation</strong> - Año: 2004
        </li>
      </ul>
    </div>
  );
}
export default Albums;

