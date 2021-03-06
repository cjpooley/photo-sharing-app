import React from 'react';
import { Link } from 'react-router-dom';

export const PhotosListItem = ({ photo }) => (
  <Link to={`/photo/${photo._id}`}>
    <div className="photos-list-item-wrap">
      <img className="photos-list-item" src={photo.url} height="200" width="200" />
    </div>
  </Link>
)