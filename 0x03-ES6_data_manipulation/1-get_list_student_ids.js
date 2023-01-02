export default function getListStudentIds(tab){
  if(Array.isArray(tab)){
    let id_tab = new Array(tab.length)
    for(let i = 0; i < tab.length; i++){
      id_tab[i] = tab[i].id
    }
    return id_tab;
  } else {
    return []
  }
}
