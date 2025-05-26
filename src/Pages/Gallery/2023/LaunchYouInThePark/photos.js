import Photos from '../../../../components/Gallery';
import {
  LaunchYouInTheParkOne,
  LaunchYouInTheParkTwo,
  LaunchYouInTheParkThree,
  LaunchYouInTheParkFour,
  LaunchYouInTheParkFive,
  LaunchYouInTheParkSix,
  LaunchYouInTheParkSeven,
  LaunchYouInTheParkEight,
  LaunchYouInTheParkNine,
  LaunchYouInTheParkTen,
  LaunchYouInTheParkEleven
} from '../../../../assets';
  
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
          type: '',
        },
        {
          img: LaunchYouInTheParkFour,
          type: '',
        },
        {
          img: LaunchYouInTheParkFive,
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
  
export default PhotosLaunchYouInThePark;
  