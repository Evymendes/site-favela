import Photos from '../../../components/Gallery';
import {
  DefinitionOfSupportedProjectsOne,
  DefinitionOfSupportedProjectsTwo,
  DefinitionOfSupportedProjectsThree,
  DefinitionOfSupportedProjectsFour,
  DefinitionOfSupportedProjectsFive,
  DefinitionOfSupportedProjectsSix,
  DefinitionOfSupportedProjectsSeven,
  DefinitionOfSupportedProjectsEight,
  DefinitionOfSupportedProjectsNine,
  DefinitionOfSupportedProjectsTen,
  DefinitionOfSupportedProjectsEleven,
  DefinitionOfSupportedProjectsTwelve,
  DefinitionOfSupportedProjectsThirteen,
} from '../../../assets';
  
function PhotosDefinitionOfSupportedProjects() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: DefinitionOfSupportedProjectsOne,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsTwo,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsThree,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsFour,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsFive,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsSix,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsSeven,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsEight,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsNine,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsTen,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsEleven,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsTwelve,
          type: '',
        },
        {
          img: DefinitionOfSupportedProjectsThirteen,
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
  
export default PhotosDefinitionOfSupportedProjects;
  