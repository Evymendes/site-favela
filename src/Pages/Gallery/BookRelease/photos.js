import Photos from '../../../components/Gallery';
import {
  BookReleaseOne,
  BookReleaseTwo,
  BookReleaseThree,
  BookReleaseFour,
  BookReleaseFive,
  BookReleaseSix,
  BookReleaseSeven,
  BookReleaseEight
} from '../../../assets';
  
function PhotosBookRelease() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: BookReleaseOne,
          type: '',
        },
        {
          img: BookReleaseTwo,
          type: '',
        },
        {
          img: BookReleaseThree,
          type: '',
        },
        {
          img: BookReleaseFour,
          type: '',
        },
        {
          img: BookReleaseFive,
          type: '',
        },
        {
          img: BookReleaseSix,
          type: '',
        },
        {
          img: BookReleaseSeven,
          type: '',
        },
        {
          img: BookReleaseEight,
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
  
export default PhotosBookRelease;
  