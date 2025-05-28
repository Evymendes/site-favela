import Photos from '../../../../components/Gallery';
import {
  Seminario2025One,
  Seminario2025Two,
  Seminario2025Three,
  Seminario2025Four,
  Seminario2025Five,
  Seminario2025Six,
  Seminario2025Seven,
  Seminario2025Eight,
  Seminario2025Nine,
  Seminario2025Ten,
  Seminario2025Eleven,
  Seminario2025Twelve,
} from '../../../../assets';

function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: Seminario2025One,
          type: '',
        },
        {
          img: Seminario2025Two,
          type: '',
        },
        {
          img: Seminario2025Three,
          type: '',
        },
        {
          img: Seminario2025Four,
          type: '',
        },
        {
          img: Seminario2025Five,
          type: '',
        },
        {
          img: Seminario2025Six,
          type: '',
        },
        {
          img: Seminario2025Seven,
          type: '',
        },
        {
          img: Seminario2025Eight,
          type: '',
        },
        {
          img: Seminario2025Nine,
          type: '',
        },
        {
          img: Seminario2025Ten,
          type: '',
        },
        {
          img: Seminario2025Eleven,
          type: '',
        },
        {
          img: Seminario2025Twelve,
          type: '',
        },
      ]
    }
  ];

  return (
    <Photos
      list={listPhotos}
    />
  );
}

export default PhotosEdictRefinementSeminar;
