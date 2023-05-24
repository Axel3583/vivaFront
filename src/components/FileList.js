import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FileItem from './FileItem'

export default function FileList({ files, removeFile }) {

    const deleteFileHandeler = (_name) => {
        // axios.delete(`http://localhost:8080/upload?name=${_name}`)
        // .then((res) => removeFile(_name))
        // .catch((err) => console.log(err))
        // Après avoir supprimé le fichier avec succès
        removeFile(_name);
    }
    return (
        <View>
            <ul>
                {
                    files && files.map(f => <FileItem
                        key={f.name}
                        file={f}
                        deleteFile={deleteFileHandeler} />)
                }
            </ul>
        </View>
    )
}
