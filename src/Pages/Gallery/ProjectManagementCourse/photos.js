import Photos from '../../../components/Gallery';
import {
  ProjectManagementCourseOne,
  ProjectManagementCourseTwo,
  ProjectManagementCourseThree,
  ProjectManagementCourseFour,
  ProjectManagementCourseFive,
  ProjectManagementCourseSix,
  ProjectManagementCourseSeven,
  ProjectManagementCourseEight,
  ProjectManagementCourseNine,
  ProjectManagementCourseTen,
  ProjectManagementCourseEleven,
  ProjectManagementCourseTwelve
} from '../../../assets';
  
function PhotosProjectManagementCourse() {
  const listPhotos = [
    {
      id: 0,
      type: '',
      name: '',
      photos: [
        {
          img: ProjectManagementCourseOne,
          type: '',
        },
        {
          img: ProjectManagementCourseTwo,
          type: '',
        },
        {
          img: ProjectManagementCourseThree,
          type: 'standing',
        },
        {
          img: ProjectManagementCourseFour,
          type: '',
        },
        {
          img: ProjectManagementCourseFive,
          type: '',
        },
        {
          img: ProjectManagementCourseSix,
          type: '',
        },
        {
          img: ProjectManagementCourseSeven,
          type: '',
        },
        {
          img: ProjectManagementCourseEight,
          type: '',
        },
        {
          img: ProjectManagementCourseNine,
          type: '',
        },
        {
          img: ProjectManagementCourseTen,
          type: '',
        },
        {
          img: ProjectManagementCourseEleven,
          type: '',
        },
        {
          img: ProjectManagementCourseTwelve,
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
  
export default PhotosProjectManagementCourse;
  