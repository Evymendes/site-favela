import Photos from '../../../components/Gallery';
import {
  EdictRefinementSeminarOne,
  EdictRefinementSeminarTwo,
  EdictRefinementSeminarThree,
  EdictRefinementSeminarFour,
  EdictRefinementSeminarFive,
  EdictRefinementSeminarSix,
  EdictRefinementSeminarSeven,
  EdictRefinementSeminarEight,
  EdictRefinementSeminarNine
} from '../../../assets';
  
function PhotosEdictRefinementSeminar() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: EdictRefinementSeminarOne,
          type: '',
        },
        {
          img: EdictRefinementSeminarTwo,
          type: 'standing',
        },
        {
          img: EdictRefinementSeminarThree,
          type: 'standing',
        },
        {
          img: EdictRefinementSeminarFour,
          type: 'standing',
        },
        {
          img: EdictRefinementSeminarFive,
          type: 'standing',
        },
        {
          img: EdictRefinementSeminarSix,
          type: '',
        },
        {
          img: EdictRefinementSeminarSeven,
          type: '',
        },
        {
          img: EdictRefinementSeminarEight,
          type: 'standing',
        },
        {
          img: EdictRefinementSeminarNine,
          type: 'standing',
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
  