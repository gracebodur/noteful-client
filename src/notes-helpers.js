
export const findFolder = (folders=[], folderid) =>
folders.find(folder => folder.folderid === folderid)

export const findNote = (notes=[], noteid) =>
notes.find(note => note.noteid+''=== noteid)

export const getNotesForFolder = (notes=[], folderId) => (
(!folderId)
  ? notes
  : notes.filter(note => note.folderId+'' === folderId)
)

export const countNotesForFolder = (notes=[], folderid) =>
notes.filter(note => note.folderId === folderid).length
