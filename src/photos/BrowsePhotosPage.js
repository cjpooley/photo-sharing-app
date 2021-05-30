import React from 'react';
import { useProtectedResource } from '../data';

export const BrowsePhotosPage = () => {
  const {
    isLoading: isLoadingMyPhotos,
    data: myPhotos,
  } = useProtectedResource('/my-photos', []);

  console.log(myPhotos);

  return <h1>Hello this is the browse photos page</h1>
}