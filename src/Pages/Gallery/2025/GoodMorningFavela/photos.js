import Photos from '../../../../components/Gallery';
import {
  BomDiaFavela2025,
  BomDiaFavela2025One,
  BomDiaFavela2025Two,
  BomDiaFavela2025Three,
  BomDiaFavela2025Four,
  BomDiaFavela2025Five,
} from '../../../../assets';

function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: BomDiaFavela2025,
          type: '',
        },
        {
          img: BomDiaFavela2025One,
          type: '',
        },
        {
          img: BomDiaFavela2025Two,
          type: '',
        },
        {
          img: BomDiaFavela2025Three,
          type: '',
        },
        {
          img: BomDiaFavela2025Four,
          type: '',
        },
        {
          img: BomDiaFavela2025Five,
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
