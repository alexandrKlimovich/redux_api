import * as albumSelectors from "../../redux/store/album/selectors";
import { Link } from "react-router-dom";
import { fetchAlbums } from "../../redux/store/album/actions";
import CustomRenderer from "../../components/CustomRenderer";
import { useSelector } from "react-redux";
import "../../css/Albums.css";
import "../../index.css";

export default function Albums() {
  const albums = useSelector(albumSelectors.albums);

  return (
    <CustomRenderer
      request={fetchAlbums}
      selector={albumSelectors.all}
      children={albums.map((album) => (
        <Link
          key={album.id}
          to={`/albums/${album.id}`}
          className="listAlbumsLink"
        >
          <div className="listAlbums">
            <img
              className="icon"
              alt="list"
              src="https://cdn-icons-png.flaticon.com/512/45/45009.png"
            />
            {album.title}
          </div>
        </Link>
      ))}
    />
  );
}
