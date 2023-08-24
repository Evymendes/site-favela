import Photos from '../../../components/Gallery';
import {
  LaunchYouInTheParkOne,
  LaunchYouInTheParkTwo,
  LaunchYouInTheParkThree,
  LaunchYouInTheParkFour,
  LaunchYouInTheParkFive,
  LaunchYouInTheParkFiveA,
  LaunchYouInTheParkFiveB,
  LaunchYouInTheParkSix,
  LaunchYouInTheParkSeven,
  LaunchYouInTheParkEight,
  LaunchYouInTheParkNine,
  LaunchYouInTheParkTen,
  LaunchYouInTheParkEleven
} from '../../../assets';
  
function PhotosLaunchYouInThePark() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: LaunchYouInTheParkOne,
          type: '',
        },
        {
          img: LaunchYouInTheParkTwo,
          type: '',
        },
        {
          img: LaunchYouInTheParkThree,
          type: 'standing',
        },
        {
          img: LaunchYouInTheParkFour,
          type: 'standing',
        },
        {
          img: LaunchYouInTheParkFive,
          type: '',
        },
        {
          img: LaunchYouInTheParkFiveA,
          type: '',
        },
        {
          img: LaunchYouInTheParkFiveB,
          type: '',
        },
        {
          img: LaunchYouInTheParkSix,
          type: '',
        },
        {
          img: LaunchYouInTheParkSeven,
          type: '',
        },
        {
          img: LaunchYouInTheParkEight,
          type: '',
        },
        {
          img: LaunchYouInTheParkNine,
          type: '',
        },
        {
          img: LaunchYouInTheParkTen,
          type: '',
        },
        {
          img: LaunchYouInTheParkEleven,
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
  
export default PhotosLaunchYouInThePark;
  