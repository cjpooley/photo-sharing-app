import React from 'react';
import { PhotosListItem } from './PhotosListItem';
import { NewPhotoButton } from './NewPhotoButton';

export const PhotosList = ({ isLoading, photos, shared = false }) =>
  isLoading
    ? <p>Loading...</p>
    : (
      <div className="photos-list">
        {photos.map(photo => (
          <PhotosListItem key={photo._id} photo={photo} />
        ))}
        {!shared &&
          <NewPhotoButton />
        }
      </div>
    )
