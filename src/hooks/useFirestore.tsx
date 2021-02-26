import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

type path = {
    path: string
}

type data = {
    data: any
}
export const useFirestoreCol: React.FC<path> = ( path ) => {
    const [val, setVal] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection(path)
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data());
                });
            });
        return () => unsubscribe()
        
    }, [path])

    const createDoc: React.FC<data> = (data) => {
        firestore().collection(path).add(data);
    }

    return { val, createDoc };
}

export const useFirestoreDoc: React.FC<path> = ( path ) => {

    const [val, setVal] = useState([]);

    useEffect(() => {
        const subscriber = firestore().doc(path).onSnapshot(documentSnapshot => {
            setVal(documentSnapshot.data())
        });
        return () => subscriber()
    }, [path])

    const updateDoc:React.FC<any> = (data) => {
        firestore().doc(path).set(
          {
            ...data,
          },
          { merge: true }
        );
      };

    const deleteDoc = () => firestore().doc(path).delete();

    return { val, updateDoc,  deleteDoc};
}