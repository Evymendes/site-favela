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
          type: '',
        },
        {
          img: EdictRefinementSeminarThree,
          type: '',
        },
        // {
        //   img: EdictRefinementSeminarFour,
        //   type: '',
        // },
        {
          img: EdictRefinementSeminarFive,
          type: '',
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
          type: '',
        },
        {
          img: EdictRefinementSeminarNine,
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
  