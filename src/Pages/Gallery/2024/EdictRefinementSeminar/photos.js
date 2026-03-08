import Photos from '../../../../components/Gallery';
import {
  EdictRefinementSeminar2024One,
  EdictRefinementSeminar2024Two,
  EdictRefinementSeminar2024Three,
  EdictRefinementSeminar2024Four,
  EdictRefinementSeminar2024Five,
  EdictRefinementSeminar2024Six,
  EdictRefinementSeminar2024Seven,
  EdictRefinementSeminar2024Eight,
  EdictRefinementSeminar2024Nine,
} from '../../../../assets';

function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: EdictRefinementSeminar2024One,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Two,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Three,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Four,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Five,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Six,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Seven,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Eight,
          type: '',
        },
        {
          img: EdictRefinementSeminar2024Nine,
          type: '',
        }
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
