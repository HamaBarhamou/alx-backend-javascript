export default function getListStudentIds(tab) {
  if (Array.isArray(tab)) {
    const idTab = new Array(tab.length);
    for (let i = 0; i < tab.length; i += 1) {
      idTab[i] = tab[i].id;
    }
    return idTab;
  }
  return [];
}
