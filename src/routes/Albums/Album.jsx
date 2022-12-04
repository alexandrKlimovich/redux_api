import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as albumSelectors from "../../redux/store/album/selectors";
import { useMemo } from "react";
import { getAlbumPhotos, getItemById } from "../../methods";
import CustomRenderer from "../../components/CustomRenderer";
import { fetchAlbums } from "../../redux/store/album/actions";
import { fetchPhotos } from "../../redux/store/photo/actions";
import * as photosSelectors from "../../redux/store/photo/selectors";
import "../../css/Album.css";
import "../../index.css";

export default function Album() {
  const params = useParams();
  const albums = useSelector(albumSelectors.albums);
  const photos = useSelector(photosSelectors.photos);

  const currentAlbum = useMemo(
    () => getItemById(albums, params.id),
    [albums, params.id]
  );
  const albumPhotos = useMemo(
    () => getAlbumPhotos(photos, params.id),
    [photos, params.id]
  );

  return (
    <div className="mainSection">
      <CustomRenderer
        request={fetchAlbums}
        selector={albumSelectors.all}
        children={currentAlbum?.title}
      />
      <CustomRenderer
        request={fetchPhotos}
        selector={photosSelectors.all}
        children={
          <div className="photoSection">
            {albumPhotos.map((photo) => (
              <img key={photo.id} src={photo.thumbnailUrl} alt="img" />
            ))}
          </div>
        }
      />
    </div>
  );
}
