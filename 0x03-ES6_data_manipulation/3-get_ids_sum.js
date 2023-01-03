import getListStudentIds from './1-get_list_student_ids.js';

export default function getStudentIdsSum(tab) {
  const idTab = getListStudentIds(tab);
  const initialValue = 0;
  return idTab.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
